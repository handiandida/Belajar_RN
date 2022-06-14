
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

const Image = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
        <Text>Home View</Text>
        <Image style={{ width : '100%', height: 300, resizeMode: 'center'}} source={require('../../assets/test.jpg')}></Image>
    </View>
  )
} 

export default Image