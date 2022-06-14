import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Gambar from './assets/gambar.jpg'
export class App extends Component {
  render() {
    return (
      <View>
        {/* <Text>Dida</Text>
        <Dida />
        <Photo />
        <BoxGreen />
        <Profile /> */}
        <StylingReactNativeComponent />
      </View>
    )
  }
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: 'blue',
        marginTop: 20,
        marginLeft: 20
      }}>
      </View>
      <View style={{ padding: 12, backgroundColor: 'lightgrey', width: 225, marginTop: 20, marginLeft: 20 }}>
        <Image style={{ width: 200, height: 120, borderRadius: 10}} source={Gambar}></Image>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15}}>
          Ini adalah sicantik
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: 'orange'}}>
          Yang bernama Napasorn
        </Text>
        <Text style={{fontSize: 12, fontWeight: '500', marginTop: 12 }}>
          Thailand
        </Text>
        <View style={{
          backgroundColor: 'lightgreen',
          paddingVertical: 6,
          borderRadius: 20,
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 14,
            fontWeight: '700',
            color: 'white',
            textAlign: 'center'
          }}>
            Lihat
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  }
})


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
