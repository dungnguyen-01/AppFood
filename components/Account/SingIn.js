import {View,Text,TextInput,StatusBar,StyleSheet,TouchableOpacity,Alert} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

import { firebase } from "../../db/firebase";
import { auth } from "../../db/firebase";
import { database } from "../../db/firebase";
import { db } from "../../db/firebase";
import {UserContext} from "../../useContext/UseContext";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SingIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = React.useContext(UserContext);
  
  const fsColllection = {
    users: "users",
  };
  const handleLogin = () => {
    setLoading(true);
    if (email === "" || password === "") {
      
      setTimeout(() => {
        Alert.alert("Error",'Please fill all the fields')
        setLoading(false);    
      }, 2500);
      
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          if (userCredential) {  

            // get info imtem by user id
            const user = userCredential.user;
            const docRef = db.collection(fsColllection.users).doc(user.uid);
            docRef.get().then(function(doc) {
              if (doc.exists) {
                console.log("Document data:", doc.data()); 
                console.log("Document la:", doc.data().createdAt);
                setUser({
                  isLogin: true,
                  token: doc.data().token,
                  username: doc.data().fullname,
                  phone: doc.data().phone,
                  email: doc.data().email,
                  userId: doc.data().userId,
                  createdAt: doc.data().createdAt,
                })

              } else {         
                console.log("No such document!");
              }
            }).catch(function(error) {
              console.log("Error getting document:", error);
            });
            setTimeout(() => {
              setLoading(false);  
              navigation.navigate("DrawerNavigator"); 
              console.log("success");                    
            }, 2500);        
          }
        })
        .catch((error) => {         
          setTimeout(() => {
            Alert.alert("Error",error.message);    
            setLoading(false);    
          }, 2500);
        });
    }
  }

  return (
    <View>
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <LottieView
        style={{ height: 220, alignSelf: "center", marginTop: -20 }}
        source={require("../../assets/animations/68312-login.json")}
        autoPlay
        speed={1}
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />

          <View style={{ marginLeft: "35%", marginBottom: 10,marginTop:5 }}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text
                style={{ color: "#0000ff",fontWeight:"bold" }}
                onPress={() => navigation.navigate("Register")}
              >
                Sign up
              </Text>
            </Text>
          </View>

          <View style={styles.container}>
            <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
            >
              <Text style={styles.txt}>Login</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text style={styles.txtOr}>Or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.buttonGle}>
              <Text style={styles.txtGle}>Log in with Google</Text>
              <LottieView
                style={{ height: 80, alignSelf: "center", marginBottom: 30 }}
                source={require("../../assets/animations/google-logo.json")}
                autoPlay
                speed={1}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
    {loading ? (
        <View
          style={{
            backgroundColor: "#e0e0d1",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/food-loading-animation.json")}
            autoPlay
            speed={1.5}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 16,
    borderColor: "#ff33ff",
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: "#f5f5f0",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0066ff",
    padding: 10,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    textAlign: "center",
    marginTop: 5,
  },
  txt: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  txtOr: {
    width: 40,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#5c5c3d",
  },
  buttonGle: {
    alignItems: "center",
    padding: 10,
    textAlign: "center",
  },
  txtGle: {
    color: "#0066ff",
    fontSize: 18,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
});
