import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/Home/HomeScreen';
import AttendanceScreen from '../screens/main/Attendance/AttendanceScreen';
import SummaryScreen from '../screens/main/Summary/SummaryScreen';
import SettingsScreen from '../screens/main/Settings/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Attendance') iconName = 'calendar-outline';
          else if (route.name === 'Summary') iconName = 'stats-chart-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerRight: () => <Headers />,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
