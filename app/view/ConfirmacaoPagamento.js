import React, { Component } from 'react';
import { 
    View,
    Image, 
} from 'react-native';



export default class ConfirmacaoPagamento extends Component { //app nome do arquivo
    
    static navigationOptions = {
        title: 'App',
      };

    constructor(props) {
      super(props)
      }

     render(){
        return(
            <View>

                <Image 
                    source = {{ uri: 'http://zanottirefrigeracao.com.br/blog/wp-content/uploads/segmento-restaurante-ecomanda-705x296.jpg' }} 
                    style = {{width: 100, height: 70, marginTop: 20}} 
                />
                
            </View>
            );
        }

}