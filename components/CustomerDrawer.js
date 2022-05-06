import {View,Text,SafeAreaView,StatusBar,Image,StyleSheet,TouchableOpacity,Alert} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { UserContext } from "../useContext/UseContext";

export default function CustomerDrawer({navigation}) {
  const [user, setUser] = React.useContext(UserContext);
 
  const handlerSignOut = () => {
    
    Alert.alert("Wanning", "Do you want to sign out?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"      
      },
      {
        text: "OK",
        onPress: () => { navigation.navigate("welcome");
        setUser({
          isLogin: false,
          token: null,
          username: null,
          phone: null,
          email: null,
          userId: null,
          createdAt: null,
        });
      }
      }        
    ]
    );
  }
  return (
    <View>
      <View style={{ backgroundColor: "#e0e0d1" }}>
        <View style={{ paddingLeft: 20 }}>
          <Image
            source={require("../assets/images/images_avater-modified.png")}
            style={styles.image_avatar}
          />         
        </View>
        <Text style={styles.text_name}>{user.username}   <Ionicons name="md-radio-button-on-sharp" size={20} color="#00cc00" /></Text>
      </View>
      <Text style={styles.txt_infro}>your information</Text>

      <View style={styles.container}>

            <Text style={styles.txtId}><Ionicons name="resize-sharp" size={15} /> - {user.userId}</Text>
            <Text style={styles.txt}><Ionicons name="person-add-outline" size={15} /> - {user.username}</Text>
            <Text style={styles.txt}><Ionicons name="mail-outline" color="red" size={15} /> - {user.email}</Text>
            <Text style={styles.txt}><Ionicons name="md-call-outline" color="gray" size={15} /> - {user.phone}</Text>
            <Text style={styles.txt}><Ionicons name="cloud-done-outline" color="blue" size={15} /> - {user.createdAt}</Text>
       
      </View>

      <View style={{marginTop:'70%',marginLeft:'30%'}}>
      <TouchableOpacity onPress={handlerSignOut} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={30} color="red" />
            <Text
              style={{
                fontSize: 15,            
                marginLeft: 5,
              }}>
               Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>     
    </View>
  );
}
const styles = StyleSheet.create({
  image_avatar: {
    width: 150,
    height: 150,
    alignSelf: "flex-start",
    marginTop: 70,
    marginLeft: 30,
    marginBottom: 10,
  },
  text_name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    fontFamily: "serif",
    marginBottom: 10,
    textAlign: 'center',
  },
    txt_infro: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 40,
        textTransform: "uppercase",
        fontFamily: "serif",
        opacity: 0.6,
    },
    container: {
        marginTop: 20,   
        marginLeft:5
    },
    txt: {
        fontSize: 16,
        color: "black",
        marginTop: 10,

    }
    ,txtId:{
        fontSize: 14,
    }
});
