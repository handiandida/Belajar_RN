import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import AndroidOpenSettings from 'react-native-android-open-settings'

export class App extends Component {

  handler () {
    Linking.openSettings()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Test App' onPress={this.handler} />
        <Button title='Coba App' onPress={() => Linking.openSettings() }/>
        <Button title='opensetting' onPress={() => AndroidOpenSettings.appDetailsSettings() }/>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});