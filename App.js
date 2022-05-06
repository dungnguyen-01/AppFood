import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import{ UserContextProvider } from "./useContext/UseContext";
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
  const store = configureStore();
  const [user, setUser] = useState({
    isLogin: false,
    token: null,
    username: null,
    phone: null,
    email: null
  });

  return (
    <UserContextProvider>
    <ReduxProvider store={store}>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer> 
    </ReduxProvider>  
    </UserContextProvider>
    
  );
}
