import { View, Text,SafeAreaView,StatusBar ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react';
import { Divider } from "react-native-elements";
import LottieView from "lottie-react-native";


export default function OrderDetail({route,navigation}) {

  const {restaurantName} = route.params;
  const {total} = route.params;
  const {createdAt} = route.params;
  const {items} = route.params;
  const {status} = route.params;
  const {orderId} = route.params;





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
      <Text style={{fontSize:18,fontWeight:'bold',color:'#0066cc'}}>ID: {orderId}</Text>
    </View>
      
      <Divider width={1.8}
            onAccessibilityAction
            style={{ marginVertical: 20 }}  />
            { items.map(item => 
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,marginBottom:10,marginTop:20}}>
           <View>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'600'}}>{item.name}</Text>
           </View>
           <View>
             <Text style={{paddingBottom:15,fontSize:15,fontWeight:'700'}}>${item.review_count}</Text>
           </View>      
      </View>
            )}
      <Divider width={1.8} onAccessibilityAction style={{ marginVertical: 20 }}  />  

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
       <Text style={{fontSize:18,fontWeight:'bold',color:'#ff0000'}}>Total to pay</Text>
       <Text style={{fontSize:18,fontWeight:'bold',color:'#ff0000'}}>{total}</Text>   
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:40,paddingRight:40}}>
       <Text style={{fontSize:15,fontWeight:'bold',color:'#4d94ff'}}>Status</Text>
       <Text style={{fontSize:15,fontWeight:'bold',color:'#4d94ff'}}>{status?'Success':'Pending...'}</Text>   
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
             <Text style={{paddingBottom:15,fontSize:15}}>{createdAt}</Text>
             <Text style={{paddingBottom:15,fontSize:15}}>{restaurantName}</Text>
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