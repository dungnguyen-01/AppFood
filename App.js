import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

export default function App() {
  const store = configureStore();
  return (
    <ReduxProvider store={store}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer> 
    </ReduxProvider>  
  );
}
