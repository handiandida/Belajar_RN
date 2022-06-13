import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreens from './src/screens/ListScreens'

export class App extends Component {
  render() {
    return (
      <View>
        <HomeScreen />
        {/* <ComponentScreen />
        <ListScreens /> */}
      </View>
    )
  }
}

export default App