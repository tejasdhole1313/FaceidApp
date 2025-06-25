import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const Home = () => {
  const device = useCameraDevice('back');
  const camera = useRef(null);
  const [imagePath, setImagePath] = useState('');
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  

  useEffect(() => {
    const checkPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const micPermission = await Camera.requestMicrophonePermission();
      setHasPermission(cameraPermission === 'authorized');
    };
    checkPermission();
  }, []);

  const takePicture = async () => {
    // Type assertion to fix lint error: Property 'takePhoto' does not exist on type 'never'
    if (camera.current) {
      const photo = await (camera.current as any).takePhoto();
      setImagePath(photo.path);
      setIsPhotoTaken(true);
      console.log('Photo Path:', photo.path);
    }
  };

  if (device == null || !hasPermission) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      {isPhotoTaken ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: 'file://' + imagePath }} style={styles.imagePreview} />
          <TouchableOpacity style={styles.retakeButton} onPress={() => setIsPhotoTaken(false)}>
            <Text style={styles.retakeText}>Retake</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF3C3C',
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
    backgroundColor: '#000',
  },
  imagePreview: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
    marginBottom: 20,
  },
  retakeButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#FF3C3C',
    borderRadius: 25,
  },
  retakeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
