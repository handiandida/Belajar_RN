import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sekolah : 'Dida Handian Academy'
      }
    }

    gantiState() {
      this.setState({
        sekolah: 'Dida DEV  '
      })
    }

  render() {
      const {sekolah} = this.state
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Belajar State & Props</Text>
        <View style={styles.garis} />

        {/* Isi */}
        <View style={styles.isi}>
            <Text>Ini adalah State : {this.state.sekolah}</Text>

            <Operan sekolah={sekolah} />

            <TouchableOpacity 
            style={styles.tombol}
            onPress={() => this.gantiState()}
            >
              <Text style={{ textAlign: 'center'}}>Ganti State</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { padding: 30},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10,
    },
    isi: {
        marginTop: 30
    },
    tombol: {
      backgroundColor: 'skyblue',
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
    }
})