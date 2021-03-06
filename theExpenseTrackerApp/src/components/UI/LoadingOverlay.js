import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/style';

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
