import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/Home/HomeScreen';
import FaceCheckScreen from '../components/FaceCheckScreen';
import { Home, Camera } from 'lucide-react-native'; 
import MainStack from './MainStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AllScreens() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="main" component={MainStack} />
        <Stack.Screen name="FaceCheck" component={FaceCheckScreen} />
    </Stack.Navigator>
  );
}
