import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function App() {
  const [imageCamera, setImageCamera] = useState(null);
  const [imageGallery, setImageGallery] = useState(null);

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
        console.log(data);
      }
    });
  };

  const openGallery = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageGallery(data);
        console.log(data);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Camera</Text>
      <View style={{flexDirection: 'row'}}>
        {imageCamera != null && (
          <Image
            source={{uri: imageCamera.uri}}
            style={{height: 100, width: 100}}
          />
        )}

        {imageGallery != null && (
          <Image
            source={{uri: imageGallery.uri}}
            style={{height: 100, width: 100}}
          />
        )}
      </View>

      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={openCamera}
          style={{padding: 10, margin: 10, backgroundColor: 'skyblue'}}>
          <Text>Open Camera</Text>
        </Pressable>

        <Pressable
          onPress={openGallery}
          style={{padding: 10, margin: 10, backgroundColor: 'skyblue'}}>
          <Text>Open Galery</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
