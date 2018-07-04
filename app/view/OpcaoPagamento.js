import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Button, 
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 180,
    },

});


export default class OpcaoPagamento extends Component { //app nome do arquivo
    constructor(props) {
      super(props)
    }
  
    static navigationOptions = {
      title: 'Forma de Pagamento',
    };


    render(){
        return(
            <View style={styles.container}> 
                
                    <Button //style={styles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('PagamentoCartao')}// Trocar navegação para tela de dados do pagamento
                        title="   Cartão de Crédito   "
                        color="#FFC107"
                    />
                
                    <Button //style={styles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('Login')}// Trocar navegação para tela de dados do pagamento
                        title="   Paypal   "
                        color="#FFC107"
                    />

                     <Button style={styles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('PagamentoDinheiro')}// Trocar navegação para tela de dados do pagamento
                        title="   Dinheiro   "
                        color="#FFC107"
                    />
               
            </View>

        );

    }
};