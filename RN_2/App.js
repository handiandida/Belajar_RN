import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class App extends Component {
  render() {
    return (
      <View>
        <Text>Dida</Text>
        <Dida />
        <Photo />
        <BoxGreen />
        <Profile />
      </View>
    )
  }
}

const Dida = () => {
  return <Text>Hanya Dida Yang Tampan</Text>
}

const Photo = () => {
  return (
  <Image
  source={{uri: 'https://i.pinimg.com/564x/4d/b8/e4/4db8e4d6011f0523a8234bdcfc51537a.jpg'}}
  style={{ width: 200, height: 200 }}>
  </Image>
  )
}

class BoxGreen extends Component {
  render() {
    return(
      <Text>Ini component class</Text>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
      <Image
      source={{uri: 'https://i.pinimg.com/564x/3b/23/dc/3b23dcd8d4faaa6d319f9cf35a266919.jpg'}}
      style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Text>Ini adalah puimekster</Text>
      </View>
    )
  }
}

export default App
