import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Headers from '../../../components/Headers'

function SummaryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Headers />
      <Text>Welcome to Home</Text>
    </SafeAreaView>
  )
}

export default SummaryScreen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
