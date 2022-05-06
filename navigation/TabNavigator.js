import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StackNavigatorOrderFoods, StackNavigatorHome, StackNavigatorOrderDetail } from './StackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Tab.Navigator initialRouteName='Home'  screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={StackNavigatorHome} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Food" component={StackNavigatorOrderFoods} 
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
         />

        <Tab.Screen name="Order" component={StackNavigatorOrderDetail}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}
         />

    </Tab.Navigator>
  )
}
