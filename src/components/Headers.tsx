import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Headers() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginRight: 15 }}
      onPress={() => navigation.navigate('Settings')}
    >
      <Icon name="settings-outline" size={24} color="#000" />
    </TouchableOpacity>
  );
}
