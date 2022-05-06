import { View, Text, SafeAreaView, StatusBar, ScrollView,Image } from 'react-native'
import React from 'react'

export default function About() {
    const infor = [
        {
            fullname: 'Nguyễn Văn Dũng (leader)',
            class: '19BTV02',
            code: '1911549331',
            image: require('../assets/images/dung.jpg')

        },      
        {
            fullname: 'Trần Thanh Tâm',
            class: '19BTV02',
            code: '1911548644',
            image: require('../assets/images/tam.png')

        },
        {
            fullname: 'Nguyễn Minh Nhân',
            class: '19BTV02',
            code: '1900007691',
            image: require('../assets/images/nhan2.png')

        },
        {
            fullname: 'Nguyễn Hoàng Tấn Lộc',
            class: '19BTV02',
            code: '1711543093',
            image: require('../assets/images/loc.png')

        },
        {
            fullname: 'Nguyễn Thị Thúy Vy',
            class: '19BTV02',
            code: '1911548481',
            image: require('../assets/images/vy.png')

        },

    ]

  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight, flex: 1, backgroundColor: "white" }}>
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#0066cc",
        marginTop: 20

      }}>
        Team Members
      </Text>
    </View>
    <ScrollView>
     {infor.map(item => 
    <View style={{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingLeft:20,
        paddingRight:10,
        borderColor:'#99ffff',
        borderWidth:1,
        padding:10,
        
        
    }}>
    <View>
        <Image source={item.image} style={{width:70,height:70, borderRadius:50,marginRight:15}}/>
    </View>

    <View>
        <Text>Fullname:   </Text>
        <Text>Class:   </Text>
        <Text>Code:   </Text>
        
    </View>
  
    <View>   
        <Text>{item.fullname}</Text>
        <Text>{item.class}</Text>
        <Text>{item.code}</Text>
        
    </View>    
    </View>
)}
    </ScrollView>
    </SafeAreaView>

  )
}