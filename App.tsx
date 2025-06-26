import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import HomeScreen from './src/screens/main/Home/HomeScreen'

const App = () => {
  return (
    <View>
      <HomeScreen  />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})