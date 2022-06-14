import React, { Component, useContext } from 'react'
import { Text, View, Button } from 'react-native'

const ClassB = ({ navigation }) => {
  
  return (
    <View>
      <Text style={{fontSize:20}}>Class B</Text>
      <Button onPress={() => navigation.navigate('ClassF')} title={'Screen Stack B'}></Button>
    </View>
  )
}

export default ClassB

