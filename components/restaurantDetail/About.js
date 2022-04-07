import { View, Text,Image } from 'react-native'
import React from 'react'


const yelpRestaurantInfo = {
    name: "India's Grill",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: [
        {title: "Indian"},
        {title: "American"},
        {title: "Coffee"}
    ],
    price: "$$",
    reviews: 700,
    rating: 4.9,
};


export default function About(props) {
const {name,image,categories,price,reviews,rating} = props.route.params;
const formattedCategory = categories.map((category) => category.title).join(" • ");
const description = `${formattedCategory} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;


  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}
const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{width:'100%', height:180}} />
)
const RestaurantName = (props) => (
    <Text
      style={{
          fontSize: 29,
          fontWeight: '600',
          marginTop: 10,
          marginHorizontal:15,
      }}
    >{props.name}
    </Text>
)
const RestaurantDescription = (props) => (
    <Text 
      style={{
          marginTop: 10,
          marginHorizontal:15,
          fontWeight:'400',
          fontSize:15.5,
      }}>
      {props.description}
    </Text>
)