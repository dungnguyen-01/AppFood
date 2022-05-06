import { View, Text, SafeAreaView,StatusBar,StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import React,{useState, useEffect,useRef} from 'react'
import { UserContext } from "../useContext/UseContext";
import { db } from "../db/firebase";

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function OrderDetail({navigation}) {
    const [order, setOrder] = useState([]);

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
  
    const notificationListener = useRef();
    const responseListener = useRef();
  
  
  const fsColllection = {
    orders: "orders",
  };


  const [user, setUser] = React.useContext(UserContext);

  const getData = () => {
    db.collection(fsColllection.orders)
      .where("userId", "==", user.userId)
      .onSnapshot((querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ id: doc.id, ...doc.data() });
        });
        setOrder(orders);
        orders.map(item => {
          if (item.status === 1 && item.show === true) {
           setNotification(true);
            Notifications.scheduleNotificationAsync({
              content: {

                title: 'Happy '+ item.fullname +'!',
                body: 'Order success with code orders '+ item.orderId,
                data: { data: 'goes here' },
              },
              trigger: { seconds: 2 },
            });
            
            db.collection("orders").doc(item.id).update({
              show: false
            })
            console.log("notification sent");
                      
          }
        })
      });

  }






  useEffect(() => {
    getData();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
  
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
  
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };


  } ,[])

  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight,flex: 1}}>  

     <View style={styles.txtView}>
            <Text style={styles.txt}>Order Food List</Text>  
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     {order.map(item => 
     
      <View style={styles.container}>

      <View style={{backgroundColor:'#66a3ff',borderTopLeftRadius:10,borderTopRightRadius:10}}>
            <Text style={styles.txtStatus} 
            >{item.status?'Success':'Pending...'}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontWeight:'bold',fontSize:18}}>{item.restaurantName}</Text>
          
        </View>
        <View style={styles.item}>
          <Text style={{color:'#ff0000',fontWeight:'bold',fontSize:16}}
          >{item.total}</Text>
          
          <TouchableOpacity
            style={styles.button}  
            key={item}
            onPress={()=>navigation.navigate('ListOrder'
            , {
              id: item.id,
              items: item.items,
              restaurantName: item.restaurantName,
              total: item.total,
              status: item.status,
              orderId: item.orderId,
              createdAt: item.createdAt = new Date(item.createdAt.seconds * 1000).toLocaleDateString("en-US"),
            }
            )}        
          >
            <Text style={{color:'#1f7a1f'}}>Details...</Text>
          </TouchableOpacity>
          <Text>{item.createdAt?new Date(item.createdAt.seconds * 1000).toLocaleDateString("en-US"):'08/05/2023'}</Text>
        </View>   
      </View>


     )}
     </ScrollView>  
    </SafeAreaView>
  )
}


async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } 

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
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
  txtStatus:{
    textAlign: 'center',
    fontSize: 16,
    padding: 2,
    fontWeight: '700',
    color: '#ffffff',
  },
  txtSta:{
    color:'#000000',
  }
})