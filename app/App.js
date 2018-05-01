import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Oi!</Text>
        <Text>teste.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
