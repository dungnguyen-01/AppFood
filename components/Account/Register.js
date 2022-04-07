import { View,Text,SafeAreaView,StyleSheet,StatusBar,ScrollView,TextInput,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function Register() {
  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>
      <View style={styles.container}>     
        <LottieView
          style={{ height: 200, alignSelf: "center" }}
          source={require("../../assets/animations/a-list.json")}
          autoPlay
          speed={1}
        />
      <ScrollView> 
      <View style={{marginTop:10}}>
        <TextInput 
          style={styles.input}  
          placeholder='First and last name'
          />
        <TextInput 
          style={styles.input} 
          keyboardType='phone-pad' 
          placeholder='Phone number'         
          />
        <TextInput 
          style={styles.input} 
          keyboardType='email-address' 
          placeholder='Email'           
          />
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          keyboardType='visible-password' 
          placeholder='Password'          
          />  
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          keyboardType='visible-password' 
          placeholder='Confirm password'         
          />  
      </View>
      </ScrollView>

      <View style={styles.container}>
        <TouchableOpacity 
         style={styles.button}
         >
          <Text style={styles.txt}>Register</Text>
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
    height:50,
    borderRadius:10,
    borderWidth:2,
    fontSize:16,
    borderColor:'#009900', 
    marginTop:20,
    paddingLeft:15,
    backgroundColor:'#ebebe0'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0066ff",
    padding: 10,
    borderRadius: 50,
    textAlign:'center',  
    marginTop:35,
    width:250,
    margin:10
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
    marginTop:5

  },
  txtGle:{
    color: '#0066ff',
    fontSize:18
  },

})