import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import MapView from 'react-native-maps'
import { ActionButton } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default class Home extends Component { //app nome do arquivo
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'App',
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <ActionButton icon="camera" />
      </View>
    );
  }
}