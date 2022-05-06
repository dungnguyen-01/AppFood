import { View, Text } from 'react-native'
import React, {useState, createContext} from 'react';

export const UserContext = React.createContext();


export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
      isLogin: false,
      token: null,
      username: null,
      phone: null,
      email: null,
      userId: null
    });
  
    return (
      <UserContext.Provider value={[user, setUser]}>
        {props.children}
      </UserContext.Provider>
    )
  }
