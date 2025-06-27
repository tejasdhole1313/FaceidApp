import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/Home/HomeScreen';
import AttendanceScreen from '../screens/main/Attendance/AttendanceScreen';
import SummaryScreen from '../screens/main/Summary/SummaryScreen';
import SettingsScreen from '../screens/main/Settings/SettingsScreen';

import { Home, Calendar, BarChart2, Settings } from 'lucide-react-native'; 

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconProps = { color, size };

          if (route.name === 'Home') return <Home {...iconProps} />;
          if (route.name === 'Attendance') return <Calendar {...iconProps} />;
          if (route.name === 'Summary') return <BarChart2 {...iconProps} />;
          if (route.name === 'Settings') return <Settings {...iconProps} />;

          return null;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      
    </Tab.Navigator>
  );
}
