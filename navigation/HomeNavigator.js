import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import  WelcomeScreen from '../screens/WelcomeScreen';
import SingIn from '../components/Account/SingIn';
import Register from '../components/Account/Register';
import About from '../screens/About';


export default function HomeNavigator() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
      };
  return (
    <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}
