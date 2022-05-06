import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ListOrder from '../components/OrderDetail/ListOrder';
import Home from '../screens/Home';
import OrderDetail from '../screens/OrderDetail';
import OrderCompleted from '../screens/OrderCompleted';
import RestaurantDetail from '../screens/RestaurantDetail';
import HomeScreen from '../screens/HomeScreen';

const screenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

const StackNavigatorHome =()=> {
  return (
   <Stack.Navigator initialRouteName="HomeScreen"  screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
   </Stack.Navigator>
  )
}
const StackNavigatorOrderFoods =()=> {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  )
}

  const StackNavigatorOrderDetail =()=> {
    return (
      <Stack.Navigator initialRouteName="OrderDetail"  screenOptions={screenOptions}>
              <Stack.Screen name="OrderDetail" component={OrderDetail} />
              <Stack.Screen name="ListOrder" component={ListOrder} />
      </Stack.Navigator>
    )
  }
 
 


export {StackNavigatorHome,StackNavigatorOrderDetail,StackNavigatorOrderFoods};
