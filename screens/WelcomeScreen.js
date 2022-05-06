import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import LottieView from 'lottie-react-native'





export default function WelcomeScreen({navigation}) {

  

  return (
    <View style={{backgroundColor:"#e6ffff"}}>
     
     <View style={styles.iconDelei}>
     <LottieView
          style={{ height: 250, alignSelf: "center" }}
          source={require("../assets/animations/recipes-animation.json")}
          autoPlay
          speed={0.5}
        />

      <LottieView
          style={{ height: 150, alignSelf: "center",marginTop:-50 }}
          source={require("../assets/animations/foodies.json")}
          autoPlay
          speed={1.5}
        />

      <LottieView
          style={{ height: 400, alignSelf: "center",marginTop:'-30%' }}
          source={require("../assets/animations/fireworks.json")}
          autoPlay
          speed={0.2}
        />
     </View>
     
     <View style={styles.container1}></View>

     <View style={styles.btnView}>
     <TouchableOpacity 
         style={styles.button}
            onPress={() => navigation.navigate('SingIn')}
         >
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.button}
            onPress={() => navigation.navigate('Register')}
         >
          <Text style={styles.txt}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.txtAbut}
        onPress={() => navigation.navigate('About')}
        >About Us</Text>
     </View>

     

     <View style={styles.container2}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container1:{
    height:'35%',
    width:'100%',
    backgroundColor:'#e6ffff',
  },
  container2:{
    height:'65%',
    width:'100%',
    backgroundColor:'#66d9ff',
    borderTopLeftRadius:900    
  },iconDelei:{
    position:'absolute',
    marginTop:'10%',
    zIndex:1,
    right:0,
    left:0,
    width:'100%',
  },
  btnView:{
    position:'absolute',
    bottom:'10%',
    zIndex:1,
    right:0,
    left:0,
    width:'100%'
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ebebe0',
    padding: 5,
    marginLeft:'15%',
    marginRight:'15%',
    marginTop:15,
    backgroundColor: "#ffb380",
  }
  ,txt:{
    color:'#ffffff',
    fontWeight:'bold',
    fontFamily:'serif',
    fontSize:25,
  },
  txtAbut:{
    textAlign:'center',
    color:'blue',
    marginTop:30,
  }
  
})