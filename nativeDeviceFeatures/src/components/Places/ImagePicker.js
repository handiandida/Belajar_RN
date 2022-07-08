import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {launchCamera} from 'react-native-image-picker';

export default function ImagePicker() {
  async function takeImagehandler() {
    const image = await launchCamera({
      //   allowsEditing: true,
      //   aspect: [16, 9],
      quality: 0.5,
      saveToPhotos: true,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImagehandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
