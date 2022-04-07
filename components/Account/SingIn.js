import { View, Text,TextInput, StatusBar,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView  from 'lottie-react-native'


export default function SingIn({navigation}) {
  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>  
        <LottieView
          style={{ height: 220, alignSelf: "center" }}
          source={require("../../assets/animations/68312-login.json")}
          autoPlay
          speed={1}
        />
    <View style={styles.container}>


      <TextInput 
        style={styles.input} 
        keyboardType='email-address' 
        placeholder='Email' />
      <TextInput 
        style={styles.input} 
        secureTextEntry={true} 
        keyboardType='visible-password' 
        placeholder='Password' />  

        <Text style={{fontSize:15,color:'blue',marginTop:7,marginLeft:"75%"}}
         onPress={() => navigation.navigate('Register')}
         >
         Sign Up
         </Text>
         

    <View style={styles.container}>
        <TouchableOpacity 
         style={styles.button}
         >
          <Text style={styles.txt}>Login</Text>
        
        </TouchableOpacity>
    </View>
      
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={styles.txtOr}>Or</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    </View>

    <View style={styles.container}>
        <TouchableOpacity 
         style={styles.buttonGle}
         >
          <Text style={styles.txtGle}>Log in with Google</Text>
          <LottieView
          style={{ height: 80, alignSelf: "center", marginBottom: 30 }}
          source={require("../../assets/animations/google-logo.json")}
          autoPlay
          speed={1}
        />
        </TouchableOpacity>
    </View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin:10,
    marginLeft:30,
    marginRight:30
  },
  input: {
    height:60,
    borderRadius:10,
    borderWidth:2,
    fontSize:16,
    borderColor:'#ff33ff', 
    marginTop:20,
    paddingLeft:15,
    backgroundColor:'#f5f5f0'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0066ff",
    padding: 10,
    borderRadius: 50,
    marginLeft:50,
    marginRight:50,
    textAlign:'center',  
    marginTop:5
  },
  txt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  txtOr: {
    width: 40, 
    textAlign: 'center',
    fontSize:20,fontWeight:"bold",
    color:"#5c5c3d"
  },
  buttonGle: {
    alignItems: "center",
    padding: 10,
    textAlign:'center',  

  },
  txtGle:{
    color: '#0066ff',
    fontSize:18
  }
  
})