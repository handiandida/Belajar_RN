import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';

export class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.9207369890355235,
            longitude: 107.60703865536921,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}>
            {/* marker to wgs building */}
          <Marker coordinate={{latitude:-6.9355988394480965, longitude:107.57829678438296}} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
