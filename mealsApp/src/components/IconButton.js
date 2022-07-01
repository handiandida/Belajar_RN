import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function IconButton({icon, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Icons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
