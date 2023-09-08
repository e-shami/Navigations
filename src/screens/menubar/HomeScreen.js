import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../bottomTabs/Home';
import Settings from '../bottomTabs/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Bottom = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarActiveTintColor: 'lightblue', tabBarLabelStyle:{fontSize:14, fontWeight:600}, }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Photos',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="image" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Bottom.Screen
        name="Settings"
        component={Settings}
        options={{tabBarLabel: 'albums',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="folder-multiple-image" color={color} size={size} />
          ),
          headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;
