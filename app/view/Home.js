import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { ActionButton } from 'react-native-material-ui'
import { Permissions, Location } from 'expo'

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
    this.state = {
      location: { 
        coords: {
          latitude: 37.78825,
          longitude: -122,

        } 
      }
    }
  }

  static navigationOptions = {
    title: 'NahoraTche',
  };

  componentDidMount() {
    this.getLocations()
  }

  async getLocations() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    
    if (status !== 'granted') {
      alert('Esse app só funciona com permissao')
    }

    const location = await Location.getCurrentPositionAsync({})

    this.setState(() => ({
      location
    }))
  }

  render() {

    const restaurants = [
      { id: 'abc', name: 'Menta Café', lng: -51.182212, lat: -29.9168324 }, 
    ]
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: this.state.location.coords.accuracy,
            longitudeDelta: this.state.location.coords.accuracy,
          }}
        >
          {restaurants.map(marker => (
            <Marker 
              coordinate={{ latitude: marker.lat, longitude: marker.lng }}
              title={marker.name}
              description={"Test"}
              onCalloutPress={() => this.props.navigation.navigate('Info')}
            />
          ))}
        </MapView>
        <ActionButton icon="camera" onPress={() => this.props.navigation.navigate('QRCodeScanner')} />
      </View>
    );
  }
}