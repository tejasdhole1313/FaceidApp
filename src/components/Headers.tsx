import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Settings } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Headers() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>School</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings' as never)}>
        <Settings size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
