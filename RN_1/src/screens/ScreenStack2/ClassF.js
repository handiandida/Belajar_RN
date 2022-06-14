import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import AppContext from '../../context/AppContext'

const ClassF = ({ navigation }) => {
  // const { counter } = useContext(AppContext)
  return (
    <View>
      <Text style={{fontSize:20}}>Class F</Text>
      {/* <Text style={{fontSize:20}}>Value my counter is {counter}</Text> */}
      <Button onPress={() => navigation.navigate('ClassG')} title={'Screen Stack G'}></Button>
    </View>
  )
}

export default ClassF
