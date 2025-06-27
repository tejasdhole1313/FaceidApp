import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../../navigation/types';
import { ToastAndroid } from 'react-native';
import FaceCheckScreen from '../../../components/FaceCheckScreen';
import { useNavigation } from '@react-navigation/native';
import Headers from '../../../components/Headers';
import { View } from 'lucide-react-native';


type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {
  const route = useRoute<HomeRouteProp>();
  const fromLogin = (route.params as { fromLogin?: boolean } | undefined)?.fromLogin;
  const navigation = useNavigation();
  useEffect(() => {
    if (fromLogin) {
      console.log(' Logged in successfully. You can trigger check-in logic here.');
    }
  }, [fromLogin]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Headers />
     <FaceCheckScreen />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
