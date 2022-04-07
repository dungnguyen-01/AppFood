import { View, Text,StyleSheet,Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from "react-native-elements";
import LottieView from "lottie-react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={style.container}>
      <Image source={{uri:'https://tb-static.uber.com/prod/web-eats-v2/open-graph/postmates.png'}}  resizeMode="cover" style={style.image}/>
       
      <LottieView
          style={style.iconDe}
          source={require("../assets/animations/delivery.json")}
          autoPlay={true}
          speed={1}
        /> 


      <LottieView
          style={style.iconLottie}
          source={require("../assets/animations/welcomegolden.json")}
          autoPlay={true}
          speed={1}
        /> 

      <Divider width={1}
            onAccessibilityAction
            style={{ marginVertical: 20,marginTop:30 }}  />

      <ScrollView >
      <TouchableOpacity
       activeOpacity={0.7}
       onPress={() => {navigation.navigate('RestaurantDetail',{
           cit:"Chicago",
           name: "Chicago, IL, USA",
            image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            categories: [
                {title: "Indian"},
                {title: "American"},
                {title: "Coffee"}
            ],
            price: "$$",
            reviews: 932.332,
            rating: 4.9,
       })}}
      >
    
        <View style={style.content}>
            <View>
                <Image source={{uri: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg'}} style={{width:'100%',borderRadius:10,height:180}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text>• Chicago, IL, USA</Text>
                    <Text>⭐(4.9)</Text>
                </View>    
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                    <Text>👁 932.332+</Text>
                    <Text>☎️ +146273848237</Text>
                </View>    
                <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}>Open: 7:30AM - 10:30 PM</Text>       
            </View>
        </View>
        </TouchableOpacity>   

        <TouchableOpacity
       activeOpacity={0.7}

       onPress={() => {navigation.navigate('RestaurantDetail',{
           cit:"Hollywood",
           name: "San Francisco Los Angeles,Ca,Usa",
            image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
            categories: [
                {title: "Indian"},
                {title: "American"},
                {title: "Coffee"}
            ],
            price: "$$",
            reviews: 632.332,
            rating: 4.8,
       })}}
      >
        <View style={style.content}>
            <View>
                <Image source={{uri: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg'}} style={{width:'100%',borderRadius:10,height:180}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text>• San Francisco Los Angeles,Ca,Usa</Text>
                    <Text>⭐(4.8)</Text>
                </View>    
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                    <Text>👁 632.332+</Text>
                    <Text>☎️ +23273848237</Text>
                </View>    
                <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}>Open: 8:30 AM - 4 PM</Text>       
            </View>
        </View>
        </TouchableOpacity>   

        <TouchableOpacity
       activeOpacity={0.7}
        
       onPress={() => {navigation.navigate('RestaurantDetail',{
           cit:"SanDiego",
           name: "Hollywood, CA, United States",
            image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
            categories: [
                {title: "Indian"},
                {title: "American"},
                {title: "Coffee"}
            ],
            price: "$$",
            reviews: 232.332,
            rating: 4.3,
       })}}

      >
        <View style={style.content}>
            <View>
                <Image source={{uri: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da'}} style={{width:'100%',borderRadius:10,height:180}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text>• Hollywood, CA, United States</Text>
                    <Text>⭐(4.3)</Text>
                </View>    
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                    <Text>👁 232.332+</Text>
                    <Text>☎️ +146273848237</Text>
                </View>    
                <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}>Open: 9:30AM - 6 PM</Text>       
            </View>
        </View>
        </TouchableOpacity>   

        <TouchableOpacity
       activeOpacity={0.7}

       onPress={() => {navigation.navigate('RestaurantDetail',{
           cit:"SanFrancisco",
           name: "San Francisco, CA, United States",
            image:
            "https://www.ikea.com/images/cd/e9/cde9b9e771121c480dda162fc1691842.jpeg?f=s",
            categories: [
                {title: "Indian"},
                {title: "American"},
                {title: "Coffee"}
            ],
            price: "$$",
            reviews: 132.332,
            rating: 4.3,
       })}}
      >
        <View style={style.content}>
            <View>
                <Image source={{uri: 'https://www.ikea.com/images/cd/e9/cde9b9e771121c480dda162fc1691842.jpeg?f=s'}} style={{width:'100%',borderRadius:10,height:180}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text>• San Francisco, CA, United States</Text>
                    <Text>⭐(4.3)</Text>
                </View>    
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                    <Text>👁 132.332+</Text>
                    <Text>☎️ +146273848237</Text>
                </View>    
                <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}>Open: 9:30AM - 6 PM</Text>       
            </View>
        </View>
        </TouchableOpacity>  
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#1a0d00",
    },
    image: {
       height:'40%',
       borderRadius:20
      },
    content:{
        marginTop:20,
        margin:10,
        backgroundColor:"#ebebe0",
        borderRadius:10,
        paddingBottom:5,
        borderWidth:2,
        borderColor:"#ff0000"

    }, 
    iconLottie: {
        position:'absolute',
        height:80,
        top: 130,
        left:0,
        right:0
    },
    iconDe:{
        height:150,
        position:'absolute',
        top: 30,
        right:20
    }
})