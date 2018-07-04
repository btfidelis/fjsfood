import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput, Button, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red',
        backgroundColor: '#fff',
        
        justifyContent: 'center',
    },

    ladoAlado:{
        flexDirection: 'row',
    },

});

export default class PagamentoCartao extends Component {
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
             
            <Text>
                 <Text>   </Text>Número do cartão
            </Text>
            <TextInput style = {{textAlign:'left', width:'70%', padding: 1, fontSize: 18, margin: 1, borderRadius: 4 }}  onChange={this.textInputDidChange} />
            <Text>
                <Text>   </Text>Nome impresso no cartão
            </Text>
            <TextInput style = {{textAlign:'left', width:'70%', padding: 1, fontSize: 18, margin: 1, borderRadius: 4 }}  onChange={this.textInputDidChange} />
            <View style={styles.ladoAlado}>
                <Text>
                    <Text>   </Text>Validade
                </Text>
                <TextInput style = {{textAlign:'left', width:'30%', padding: 6, fontSize: 18, margin: 5, borderRadius: 4 }} placeholder="Mes"  />
                <TextInput style = {{textAlign:'left', width:'30%', padding: 6, fontSize: 18, margin: 5, borderRadius: 4 }} placeholder="Ano"  />
            </View>
            <Text>
                 <Text>   </Text>Código de Segurança
            </Text>
            <TextInput style = {{textAlign:'left', width:'38%', padding: 1, fontSize: 18, margin: 1, borderRadius: 4 }}  onChange={this.textInputDidChange} />
            <Text>
                 <Text>   </Text>Parcelar em
            </Text>
            <TextInput style = {{textAlign:'left', width:'38%', padding: 1, fontSize: 18, margin: 1, borderRadius: 4 }}  onChange={this.textInputDidChange} />

            

            <Button style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate('Home')}
                title="Pagar com cartão de crédito"
                color="#FFC107"
                accessibilityLabel="Learn more about this purple button"
            />
                
      </View>
    );
  }
}; // adicionar  fontFamily:'roboto' 