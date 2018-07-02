import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput, Button, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default class Login extends Component {
    static navigationOptions = { //Colocar esse trecho sempre para dar "cor" ao app
        title: 'App',
      };
    constructor(props) {
    super(props);
    this.state = {
        bodyText: 'Esqueci meu usuario/senha'
      };
  } 
  
  onPress = () => { //Defini o que acontece quando o texto clicável é clicado
    this.setState({
      count: this.props.navigation.navigate('Home') // Mudar a variavel 'Home' para definir para ir onde ir para mudar o login/senha
    })
  }

  render() {
    return (
        <View style={styles.container}> 
             Oi
      </View>
    );
  }
}; // adicionar  fontFamily:'roboto'