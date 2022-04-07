import { View, Text } from 'react-native'
import React from 'react'

export default function OrderItem({ item }) {
    const {name, review_count} = item;
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    }}>
      <Text style={{fontWeight:"600",fontSize:16}}>{name}</Text>
      <Text style={{opacity:0.5,fontSize:16}}>{review_count}</Text>
    </View>
  )
}