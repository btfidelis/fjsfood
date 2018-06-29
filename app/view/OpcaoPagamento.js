import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput, Button, Text, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        color: 'red',
        height: '23%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 180,
    },

    /*buttonStyle: {
        flex: 1,
        marginTop: 8,
    },*/

});


export default class OpcaoPagamento extends Component { //app nome do arquivo
    constructor(props) {
      super(props)
    }
  
    static navigationOptions = {
      title: 'App',
    };


    render(){
        return(
            <View style={styles.container}> 
                
                    <Button //style={styles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('Login')}// Trocar navegação para tela de dados do pagamento
                        title="   Cartão de Crédito   "
                        color="#FFC107"
                        accessibilityLabel="Learn more about this purple button"
                    />
                
                    <Button //style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('Login')}// Trocar navegação para tela de dados do pagamento
                    title="   Paypal   "
                    color="#FFC107"
                    accessibilityLabel="Learn more about this purple button"
                    />

                     <Button style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('Login')}// Trocar navegação para tela de dados do pagamento
                    title="   Dinheiro   "
                    color="#FFC107"
                    accessibilityLabel="Learn more about this purple button"
                    />
               
            </View>

        );

    }
};