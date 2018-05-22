import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  color: 'red',
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  });

export default class App extends Component {
  constructor(props) {
    super(props);
    
  } 
  render() {
    return (
        <View style={styles.container}> 
             <TextInput style = {{textAlign:'center', width:'100%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} placeholder="Usuario" onChange={this.textInputDidChange} />
             <TextInput style = {{textAlign:'center', width:'100%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} secureTextEntry={true} placeholder="Senha" onChange={this.textInputDidChange}  />
      </View>
    );
  }
};

















/* Codigo base abaixo
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Oi!</Text>
        <Text></Text>
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
 */