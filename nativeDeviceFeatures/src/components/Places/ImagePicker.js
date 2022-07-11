import {
  Button,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState(null);

  const takeImagehandler = () => {
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
        setPickedImage(data);
        console.log(data);
      }
    });
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  {pickedImage != null && (
    imagePreview = <Image
      source={{uri: pickedImage.uri}}
      style={styles.image}
    />
  )}

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImagehandler}>Take Image</OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
