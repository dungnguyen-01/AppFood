import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView,StyleSheet,StatusBar,ScrollView } from 'react-native'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from "react-native-elements";


const YELP_API_KEY =
 "s5R5uq7Bwjqn-hM55TV203JJ39UYVvDkIbqpMhAngxYsw8diHEBxELQCA4FwnG3RRM97KEqSTW2d1N7zDr_GT8kN6tSkKa0xCl4kCQRqHZEqQUwea5RPeeMiQRpFYnYx";

 export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Chicago");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView  style={{paddingTop: StatusBar.currentHeight,backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}  navigation={navigation}    
        />
      </ScrollView>
  
         <Divider width={1} />
      
    
    </SafeAreaView>
  );
}
