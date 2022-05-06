import {View,Text,SafeAreaView,StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Alert 
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";

import { firebase } from "../../db/firebase";
import { auth } from "../../db/firebase";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const fsColllection = {
    users: "users",
  };

  const rand = () => {
    return Math.random().toString(36).substr(2);
  };

  const token = () => {
    return rand() + rand();
  };

  const handleRegister = () => {
    setLoading(true);
    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phone === ""
    ) {
      setTimeout(() => {
        Alert.alert("Error",'Please fill all the fields')
        setLoading(false);    
      }, 2500);
    } else if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          if (userCredential) {
            const user = userCredential.user;
            const userInfo = {
              userId: user.uid,
              fullname: fullname,
              email: email,
              phone: phone,
              token: token(),
              createdAt: new Date().toISOString(),
            };
            firebase
              .firestore()
              .collection(fsColllection.users)
              .doc(user.uid)
              .set(userInfo)
              .then(() => {

                 setTimeout(() => {                 
                  setLoading(false);   
                  Alert.alert("Success",'You are registered successfully');
                  navigation.navigate("SingIn");
                }, 2500);
               
              })
              .catch((error) => {
                setTimeout(() => {   
                  Alert.alert("Error",error.message);      
                  setLoading(false);                     
                }, 2500);                
              });
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Password does not match");
    }
  };
  return (
    <>
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../../assets/animations/a-list.json")}
            autoPlay
            speed={1}
          />
          <ScrollView>
            <View style={{ marginTop: 10 }}>
              <TextInput
                style={styles.input}
                placeholder="First and last name"
                onChangeText={(text) => setFullname(text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                placeholder="Phone number"
                onChangeText={(text) => setPhone(text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                keyboardType="visible-password"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                keyboardType="visible-password"
                placeholder="Confirm password"
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            <View style={{marginBottom: 10,marginTop:5 }}>
            <Text style={styles.footerText}>
             Back to! {" "}
              <Text
                style={{ color: "#ff0000",fontWeight:"bold" }}
                onPress={() => navigation.navigate("SingIn")}
              >
                Sign In
              </Text>
            </Text>
          </View>
          </ScrollView>

          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.txt}>Register</Text>
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
    </>
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
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 16,
    borderColor: "#009900",
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: "#ebebe0",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0066ff",
    padding: 10,
    borderRadius: 50,
    textAlign: "center",
    marginTop: 5,
    width: 250,
    margin: 10,
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
    marginTop: 5,
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
