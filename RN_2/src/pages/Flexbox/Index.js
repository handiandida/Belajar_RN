import React, { Component, useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native'

// class MateriFLexbox extends Component {
//   constructor(props) {
//     super(props)
//     console.log('==> constructor')
//     this.state = {
//       love : 100,
//     }
//   }

//   componentDidMount() {
//     console.log('==> component did mount')
//     setTimeout(() => {this.setState({
//       love: 1000
//     })
//   }, 2000)  
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount')
//   }

//   componentDidUpdate() {
//     console.log('==> component did update')
//   }

//   render() {
//     console.log('==> render')
//     return (
//     <View>
//       <View 
//       style={{ 
//         flexDirection: 'row', 
//         backgroundColor: 'grey',
//         alignItems: 'flex-end',
//         justifyContent: 'space-between' 
//         }}>
//         <View style={{ backgroundColor: 'red', width: 10, height: 50 }}></View>
//         <View style={{ backgroundColor: 'yellow', width: 20, height: 50 }}></View>
//         <View style={{ backgroundColor: 'green', width: 30, height: 50 }}></View>
//         <View style={{ backgroundColor: 'purple', width: 40, height: 50 }}></View>
//       </View>
//       <View 
//       style={{ 
//         flexDirection: 'row', 
//         justifyContent: 'space-around' 
//         }}>
//         <Text>Beranda</Text>
//         <Text>Video</Text>
//         <Text>Playist</Text>
//         <Text>Komunitas</Text>
//         <Text>Channel</Text>
//         <Text>Tentang</Text>
//       </View>
//       <View style={{ flexDirection: 'row' }}>
//         <Image 
//         source={{ uri : 'https://i.pinimg.com/564x/e2/aa/a2/e2aaa201c37908a31bec9122de99dcb9.jpg' }}
//         style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20, marginLeft: 20}} 
//         ></Image>
//         <View style={{ marginTop:20, marginLeft: 10}}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Napsorn</Text>
//         <Text>Si cantik {this.state.love} %</Text>
//         </View>
//       </View>
//     </View>
//     )
//   }
// }

const MateriFLexbox = () => {
  const [love, setLove] = useState(0)

  useEffect(() => {
    console.log('did mount')
    setTimeout(() => {
      setLove(100)
    }, 3000)
    return () => {
      console.log('did update')
    }
  }, [love])

  // useEffect(() => {
  //   console.log('did update')
  //   setTimeout(() => {
  //     setLove(1000)
  //   }, 5000)
  // }, [love])

  return (
    <View>
      <View 
      style={{ 
        flexDirection: 'row', 
        backgroundColor: 'grey',
        alignItems: 'flex-end',
        justifyContent: 'space-between' 
        }}>
        <View style={{ backgroundColor: 'red', width: 10, height: 50 }}></View>
        <View style={{ backgroundColor: 'yellow', width: 20, height: 50 }}></View>
        <View style={{ backgroundColor: 'green', width: 30, height: 50 }}></View>
        <View style={{ backgroundColor: 'purple', width: 40, height: 50 }}></View>
      </View>
      <View 
      style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around' 
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image 
        source={{ uri : 'https://i.pinimg.com/564x/e2/aa/a2/e2aaa201c37908a31bec9122de99dcb9.jpg' }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20, marginLeft: 20}} 
        ></Image>
        <View style={{ marginTop:20, marginLeft: 10}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Napsorn</Text>
        <Text>Si cantik {love} %</Text>
        </View>
      </View>
    </View>
  )
}

export default MateriFLexbox