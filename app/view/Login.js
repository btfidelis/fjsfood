import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';


import { 
  View, 
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { colors } from '../utils/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default class Login extends Component {
  static navigationOptions = { //Colocar esse trecho sempre para dar "cor" ao app
    title: 'NahoraTche',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      bodyText: '',
      username: '',
      password: '',
    };
  } 
  
  onPress = async () => { //Defini o que acontece quando o texto clicável é clicado
    this.setState(() => ({ loading: true, bodyText: '' }))
    const user = this.state.username
    const pass = this.state.password
    try {
      const response = await fetch('https://food-app-fjs.herokuapp.com/auth/user', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        mode: 'no-cors',
        body: JSON.stringify({ user, pass })
      })
      
      const jsonResponse = await response.json()
      console.log('JSON RESPONSE',  jsonResponse)
      if (jsonResponse.error) {
        this.setState(() => ({ loading: false, bodyText: 'Usuário ou Senha incorretos' }))
      } else {
        await AsyncStorage.setItem('userToken', jsonResponse.data)
        
        this.props.navigation.navigate('App') // Mudar a variavel 'Home' para definir para ir onde ir para mudar o login/senha
      }
    } catch (error) {
      this.setState(() => ({ loading: false, bodyText: 'Usuário ou Senha incorretos' }))
    }


  }

  handleInput(input) {
    return (v) => {
      if (input === 'username') {
        this.setState(() => ({ username: v }))  
      }

      if (input === 'password') {
        this.setState(() => ({ password: v }))
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} textStyle={colors.textPrimaryColor} />
        <TextInput style = {{textAlign:'left', width:'70%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} placeholder="Usuario" onChangeText={this.handleInput('username').bind(this)} />
        <TextInput style={{ textAlign: 'left', width: '70%', padding: 6, fontSize: 18, margin: 10, borderRadius: 4 }} secureTextEntry={true} placeholder="Senha" onChangeText={this.handleInput('password').bind(this)} />
        <Button style={styles.buttonStyle}
          onPress={this.onPress.bind(this)}
          title="   Login   "
          color="#FFC107"
          accessibilityLabel="Learn more about this purple button"
        />
        <TouchableHighlight /* Dentro desse Touchable... vai tudo que é pra ser o texto clicável */
          style={styles.button}
          onPress={() => alert('')} 
        >
          <Text style={{ marginTop: 15 }} >Esqueci meu usuario/senha</Text>
        </TouchableHighlight>
        <Text style={{ color: 'red' }} >{this.state.bodyText}</Text>
      </View>
    );
  }
}; // adicionar  fontFamily:'roboto'