import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Home extends Component { //app nome do arquivo
    static navigationOptions = {
      title: 'App',
    };

    render() {
      return (
        <View style={styles.container}>
          <Text>teste12334!</Text>
          <Text>kkkkkkkkkkk</Text>
          <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
}