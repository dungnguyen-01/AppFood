import { View, Text, SafeAreaView,StatusBar,StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'

export default function OrderDetail({navigation}) {
  const orderList =[
    {
      name:"Coffee",
      price:130.33,
      time:"12:00 PM",
      date:"12/12/2020",

    },
    {
      name:"ShuShi",
      price:151.33,
      time:"8:30 AM",
      date:"02/02/2022",

    },
    {
      name:"Hanbuger",
      price:98.23,
      time:"7:00 PM",
      date:"29/03/2022",

    },
    {
      name:"Cheese Burger",
      price:130.33,
      time:"19:32 PM",
      date:"15/04/2022",

    },
    {
      name:"ShuShi",
      price:151.33,
      time:"8:30 AM",
      date:"02/02/2022",

    },
    {
      name:"Hanbuger",
      price:98.23,
      time:"7:00 PM",
      date:"29/03/2022",

    }
    
  ]
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight,flex: 1}}>  

     <View style={styles.txtView}>
            <Text style={styles.txt}>Order Food List</Text>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     {orderList.map((item)=>(
       <View style={styles.container}>
        <View style={styles.item}>
          <Text style={{fontWeight:'bold',fontSize:18}}>{item.name}</Text>
          <Text>{item.time}</Text>
        </View>
        <View style={styles.item}>
          <Text style={{color:'#ff0000',fontWeight:'bold',fontSize:16}}
          >${item.price}</Text>
          
          <TouchableOpacity
            style={styles.button}  
            onPress={()=>navigation.navigate('ListOrder')}        
          >
            <Text style={{color:'#1f7a1f'}}>Details...</Text>
          </TouchableOpacity>
          <Text>{item.date}</Text>
        </View>   
      </View>
     ))}
     </ScrollView>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  txtView: {
    marginTop:10,
    textAlign: 'center',
    backgroundColor: '#c2c2a3',
    margin: 5,
    marginBottom:70
  },
  txt: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#004d00',

  },
  container:{
     borderRadius:10,
     borderWidth:1,
     borderColor:"#2e2e1f",
     margin: 10,
     backgroundColor:'#ffe6e6'
  },
  item:{
    flexDirection:"row",
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:30,
    marginTop:10,
    marginBottom:10,
  },
  button: {
    alignItems: "center",
    borderRadius:50,
    backgroundColor: "#ffe6e6",  
    paddingLeft:30,
    paddingRight:30,
    paddingTop:5,
  },
})