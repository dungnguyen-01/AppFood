import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const YELP_API_KEY =
 "s5R5uq7Bwjqn-hM55TV203JJ39UYVvDkIbqpMhAngxYsw8diHEBxELQCA4FwnG3RRM97KEqSTW2d1N7zDr_GT8kN6tSkKa0xCl4kCQRqHZEqQUwea5RPeeMiQRpFYnYx";



export default function RestaurantDetail({ route, navigation }) {
  const [city, setCity] = useState("Chicago");
  const [foods, setFood] = useState([]);


  const {cit} = route.params;
  
  console.log(cit);
  const cityParma =()=>{
    setCity(cit);
    
  }
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
         setFood(json.businesses));
};
  useEffect(() => {
    getRestaurantsFromYelp();
    cityParma();
  }, [city]);


  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
