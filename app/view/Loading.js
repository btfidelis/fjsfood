import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput, Button, Text, TouchableHighlight, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
      },
    

});

export default class NovoLogin extends Component {
    static navigationOptions = { //Colocar esse trecho sempre para dar "cor" ao app
        title: 'App',
      };
  
  

  render() {
    return (
        <View style={styles.container}> 
             <ActivityIndicator size="large" color="#FFA000" />
                
      </View>
    );
  }
}; 