import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';

export default function CameraScreen() {
  const device = useCameraDevice('front'); 
  const camera = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const micPermission = await Camera.requestMicrophonePermission();
      setHasPermission(
        cameraPermission === 'authorized' && micPermission === 'authorized'
      );
    };
    checkPermission();
  }, []);

  
  const takePicture = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      setImagePath(photo.path);
      setTakePhotoClicked(false);
    }
  };

  if (device == null || !hasPermission) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      {takePhotoClicked ? (
        <View style={{ flex: 1 }}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
         ></Camera>

          <View style={styles.overlay}>
            <View style={styles.circleMask} />
            <Text style={styles.statusText}>
              {faceDetected
                ? 'Face detected, please wait...'
                : ' Looking for face...'}
            </Text>
          </View>

          <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
        </View>
      ) : (
        <View style={styles.previewContainer}>
          {imagePath !== '' && (
            <Image
              source={{ uri: 'file://' + imagePath }}
              style={styles.imagePreview}
            />
          )}
          <TouchableOpacity
            style={styles.clickPhotoButton}
            onPress={() => {
              setTakePhotoClicked(true);
              setFaceDetected(false);
            }}
          >
            <Text style={{ color: '#000', fontWeight: '600' }}>Click Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF0037',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  clickPhotoButton: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMask: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  statusText: {
    position: 'absolute',
    bottom: 120,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
