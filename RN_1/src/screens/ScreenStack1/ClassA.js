import React, { Component, useContext } from 'react'
import { Text, View, Button } from 'react-native'

const ClassA = ({ navigation }) => {
  
  return (
    <View>
      <Text style={{fontSize:20}}>Class A</Text>
      <Button onPress={() => navigation.navigate('ClassB')} title={'Screen Stack B'}></Button>
    </View>
  )
}

export default ClassA
