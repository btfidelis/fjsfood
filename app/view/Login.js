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
             <TextInput style = {{textAlign:'left', width:'70%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} placeholder="Usuario" onChange={this.textInputDidChange} />
             <TextInput style = {{textAlign:'left', width:'70%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} secureTextEntry={true} placeholder="Senha" onChange={this.textInputDidChange} />
             <Button style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate('Home')}
                title="   Login   "
                color="#FFC107"
                accessibilityLabel="Learn more about this purple button"
              />
                <TouchableHighlight /* Dentro desse Touchable... vai tudo que é pra ser o texto clicável */
                style={styles.button}
                onPress={this.onPress} 
                >
                    <Text style={{marginTop:15}}> {/* Esse Text  imprimir algum texto que é definido mais pra cima em this.state */}
                    <Text>
                    {this.state.bodyText}
                    </Text>
                    </Text>
                </TouchableHighlight>
      </View>
    );
  }
}; // adicionar  fontFamily:'roboto'