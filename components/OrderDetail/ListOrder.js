import { View, Text,SafeAreaView,StatusBar ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react';
import { Divider } from "react-native-elements";
import LottieView from "lottie-react-native";

export default function OrderDetail({navigation}) {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight,flex: 1, backgroundColor:"#e6ffff"}}>  
    <View style={{position:'absolute',right:0,left:0,top:-30}}>
          <LottieView
          style={{ height: 160, alignSelf: "center"}}
          source={require("../../assets/animations/success-icon.json")}
          autoPlay={true}
          speed={1}
        /> 
    </View>
  
    <View  style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,marginTop:50}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'#0066cc'}}>Order Details</Text>
      <Text style={{fontSize:18,fontWeight:'bold',color:'#0066cc'}}>ID: PX2351</Text>
    </View>
      
      <Divider width={1.8}
            onAccessibilityAction
            style={{ marginVertical: 20 }}  />
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,marginBottom:10,marginTop:20}}>
           <View>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'600'}}>Chicken Hot</Text>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'600'}}>Shisi Japan</Text>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'600'}}>HotDog American</Text>
           </View>
           <View>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'700'}}>$126.45</Text>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'700'}}>$126.45</Text>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'700'}}>$126.45</Text>
           </View>      
      </View>
      <Divider width={1.8} onAccessibilityAction style={{ marginVertical: 20 }}  />  

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
       <Text style={{fontSize:18,fontWeight:'bold',color:'#ff0000'}}>Total to pay</Text>
       <Text style={{fontSize:18,fontWeight:'bold',color:'#ff0000'}}>$372.45</Text>   
      </View>

       <Divider width={1.8} onAccessibilityAction style={{ marginVertical: 20 }}  /> 

       <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,marginBottom:30,marginTop:20}}>
           <View>
             <Text style={{paddingBottom:15,fontSize:15}}>House:</Text>
             <Text style={{paddingBottom:15,fontSize:15}}>Date:</Text>
             <Text style={{paddingBottom:15,fontSize:15}}>Address:</Text>
           </View>
           <View>
             <Text style={{paddingBottom:15,fontSize:15}}>7:35 PM</Text>
             <Text style={{paddingBottom:15,fontSize:15}}>25-10-2022</Text>
             <Text style={{paddingBottom:15,fontSize:15}}>Chicago</Text>
           </View>      
      </View>
      <TouchableOpacity style={{
        padding:10,
        borderRadius:30,
        marginLeft:50,
        marginRight:50,
        borderWidth:2,
        borderColor:"#ff33ff"
        }}
        onPress={()=>navigation.navigate('OrderDetail')}
        >
          <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'#3d3d29'}}>Back to order</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10
  }
})