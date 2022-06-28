import {StatusBar, StyleSheet, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient 
      colors={['#4e0329', '#ddb52f']} 
      style={styles.rootScreen}
      >
      <ImageBackground
        source={require('../src/assets/images/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage : {
    opacity: 0.15
  }
});
