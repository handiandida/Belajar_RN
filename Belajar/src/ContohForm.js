import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { Component } from 'react'
import Operan from './Operan'

export default class ContohForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
         isLogin: false
      }
    }

    login = () => {

        if(!this.state.username && !this.state.password) {
            Alert.alert("Error", "Username dan Password harus diisi")
        } else {
            this.setState({
                isLogin: true
            })
        }  
    }

  render() {
      const {username, password, isLogin } = this.state
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Belajar Membuat Form</Text>
        <View style={styles.garis} />

        {/* Isi */}
        <View style={styles.isi}>
            <View>
                <Text>Username : </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='Masukkan Username'
                value={username}
                onChangeText={(username) => this.setState({username})} 
                /> 
            </View>
            <View style={styles.wrapperInput    }>
                <Text>Password : </Text>
                <TextInput 
                style={styles.textInput}
                placeholder='Masukkan Password'
                value={password}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true} 
                /> 
            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => this.login()}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>

            {isLogin && (
                <Text style={{ marginTop: 30 }}>
                Selamat Anda Berhasil Login : {username}
                </Text>
            )}
            

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
    button: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        height: 40,
    },
    wrapperInput: {
        marginTop: 10
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})