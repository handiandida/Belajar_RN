import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = props => {
    return (
      <View>
        <Text style={styles.textStyle}> textInComponent </Text>
        <Button
        onPress={() => console.log('Button Pressed')}
        title='Go to Components Demo' />
        <TouchableOpacity onPress={() => console.log('Toucable Pressed')}>
          <Text>Go To List Demo</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 30
  }
})
