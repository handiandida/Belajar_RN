import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class ListScreens extends Component {
  render() 
  {
    const friends = [
        {
            name : 'Friends #1', Age : '20'
        },
        {
            name : 'Friends #2', Age : '45'
        },
        {
            name : 'Friends #3', Age : '32'
        },
        {
            name : 'Friends #4', Age : '27'
        },
        {
            name : 'Friends #5', Age : '53'
        },
        {
            name : 'Friends #7', Age : '30'
        },
    ]

    return (
      <View>
        <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={( {item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
        }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical: 20
    }
})
