import React, { Component, useContext } from 'react'
import { Text, View, Button } from 'react-native'

const ClassE = ({ navigation }) => {
  
  return (
    <View>
      <Text style={{fontSize:20}}>Class E</Text>
      <Button onPress={() => navigation.navigate('ClassF')} title={'Screen Stack F'}></Button>
    </View>
  )
}

export default ClassE
