import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Settings } from 'lucide-react-native';
const Headers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Headers</Text>
      <TouchableOpacity >
          <Settings size={24} />
      </TouchableOpacity>
    </View>
  );
};
export default Headers;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
