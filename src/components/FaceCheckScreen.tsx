import React, { useEffect, useRef, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {Camera, useCameraDevice, useFrameProcessor} from 'react-native-vision-camera';
import {useFaceDetector, FaceDetectionOptions, Face} from 'react-native-vision-camera-face-detector';
import { Worklets } from 'react-native-worklets-core';

export default function FaceCheckInScreen() {
  const cameraRef = useRef(null);
  const device = useCameraDevice('front');
  const [cameraVisible, setCameraVisible] = useState(false);
  const [hasDetectedFace, setHasDetectedFace] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const faceDetectionOptions = useRef<FaceDetectionOptions>({
    performanceMode: 'fast',
    landmarkMode: 'none',
    classificationMode: 'none',
  }).current;

  const { detectFaces } = useFaceDetector(faceDetectionOptions);

  useEffect(() => {
    const requestPermissions = async () => {
      const cam = await Camera.requestCameraPermission();
      const mic = await Camera.requestMicrophonePermission();
      if (cam === 'granted' && mic === 'granted') {
        setPermissionGranted(true);
      }
    };
    requestPermissions();
  }, []);

  const handleDetectedFaces = Worklets.createRunOnJS((faces: Face[]) => {
    if (!hasDetectedFace && faces.length > 0) {
      setHasDetectedFace(true);
      setCameraVisible(false);
      Alert.alert('Match Found', `Face detected successfully!`);
    }
  });

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const faces = detectFaces(frame);
    if (faces.length > 0) {
      handleDetectedFaces(faces);
    }
  }, []);

  if (!permissionGranted || !device) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Requesting Permissions...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cameraVisible ? (
        <>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
          />
          <View style={styles.overlay}>
            <Text style={styles.statusText}>Scanning Face...</Text>
          </View>
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => {
              setHasDetectedFace(false);
              setCameraVisible(true);
            }}
          >
            <Text style={styles.buttonText}>Check In with Face</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    backgroundColor: '#00000088',
    padding: 10,
    borderRadius: 8,
  },
  statusText: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkInButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
