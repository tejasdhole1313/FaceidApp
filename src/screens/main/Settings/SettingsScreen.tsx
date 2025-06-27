import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import Headers from '../../../components/Headers'

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Headers />
      <Text>Welcome to Home</Text>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});