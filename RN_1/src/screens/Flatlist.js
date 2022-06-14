import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Flatlist = ({navigation}) => {
  const dataArray = ['Hello', 'How', 'Are', 'You']
  const onRowSelected = (item) => {
    navigation.navigate('Detail', {'Value' : item, 'Size' : '20'})
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
         data={dataArray}
         renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onRowSelected(item)}>
          <View style={{ flex: 1, width: '90%', marginLeft: '5%', backgroundColor: 'grey', marginTop: 10, height: 50, alignItems: 'center', justifyContent:'center' }}> 
          <Text style={{ fontSize: 20, color: 'white'}}>{item}</Text>
          </View>
          </TouchableOpacity>
         )}/>
      </View>
    </SafeAreaView>
  )
} 

export default Flatlist