import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/main/Home/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <HomeScreen />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
