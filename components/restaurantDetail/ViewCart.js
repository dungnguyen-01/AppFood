import { View, Text, TouchableOpacity,Modal,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from "lottie-react-native";
import NumberFormat from 'react-number-format';

export default function ViewCart({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);



  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems); 
  const total = items
  .map((item) => item.review_count).reduce((prev, curr) => prev + curr, 0);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });
 

 const totalUSD = "$" + total.toFixed(2);

// console.log("total: "+total);
//   const totalUSD = "$" + total.toFixed(2);
  console.log(totalUSD);

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);          
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };

  const checkoutModalContent = () => {
    return(   
        <>
          <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {items.map((item,index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subtotalContainer}>
                  <Text style={styles.subtotalText}>Subtotal</Text>
                  <Text style={styles.subtotalText}>{totalUSD}</Text>
                </View>  
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <TouchableOpacity
                    style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: "center",
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    position: "relative",
                    }}
                    onPress={() => {
                      addOrderToFireBase();
                      setModalVisible(false);
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                    <Text
                      style={{
                        position: "absolute",
                        right: 20,
                        color: "white",
                        fontSize: 15,
                        top: 17,
                      }}                      
                    >
                      {total ? totalUSD : ""}
                    </Text>
                  </TouchableOpacity>
                </View>           
              </View>
          </View>
        </>
      )
  }

  return (
    <>
    <Modal 
      animationType='slide' 
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
     > 
       {checkoutModalContent()} 
     </Modal>
    {total ? (
      <View 
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            position:'absolute',
            top:"60%",
            zIndex:999
            }}>
          <View
              style={{
                  flexDirection: 'row',
                  justifyContent:'center',
                  width:'100%'
              }}>
              <TouchableOpacity  
                style={{
                  marginTop:20,
                  backgroundColor:'black',
                  flexDirection:'row',
                  justifyContent:'flex-end',
                  borderRadius:30,
                  padding:15,
                  width:300,
                  position:'relative',
                }}
                onPress={()=> setModalVisible(true)}
                >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
              </TouchableOpacity>       
           </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
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
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
});