import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ComponentScreen extends Component {
  render() {
    const name = 'Hanya Dida yang Tampan'

    return (
      <View>
        <Text style={styles.textStyle}> Getting Started With React-Native! </Text>
        <Text style={styles.subTextStyle}>Hi {name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 45
    },
    subTextStyle : {
        fontSize : 20
    }
})
