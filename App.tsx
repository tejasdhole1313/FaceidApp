import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/main/Home/Home'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})