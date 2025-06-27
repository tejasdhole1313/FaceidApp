import { View, Text, SafeAreaView , StyleSheet} from 'react-native'
import React from 'react'
import Headers from '../../../components/Headers'

function AttendanceScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Headers />

    <Text>Welcome to Home</Text>
  </SafeAreaView>
  )
}

export default AttendanceScreen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
