 import React from 'react'
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import SingIn from '../components/Account/SingIn';
 import TabNavigation from './TabNavigator';
import { View,Text } from 'react-native';
import CustomerDrawer from '../components/CustomerDrawer';


 const Drawer = createDrawerNavigator();
 export default function DrawerNavigator() {
  const screenOptions = {
    headerShown: false, 
  };
   return (
        <Drawer.Navigator drawerContent={props => <CustomerDrawer{...props}/>} initialRouteName="HomeDrawer" screenOptions={screenOptions}>
            <Drawer.Screen name="HomeDrawer" component={TabNavigation} />    
            
        </Drawer.Navigator>
   )

 }