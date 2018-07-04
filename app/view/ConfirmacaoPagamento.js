import React, { Component } from 'react';
import { 
    View,
    Image, 
    StyleSheet,
    Text,
    Button,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        height: '20%',
        justifyContent: 'space-between',

        
    },

    localView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    baseText:{
        fontFamily: 'Roboto'
    },

    buttonStyle: {
  
        alignItems: 'center',
       
        //marginTop: 50,
    }
})

export default class ConfirmacaoPagamento extends Component { //app nome do arquivo
    
    static navigationOptions = {
        title: 'Pagamento',
      };

    constructor(props) {
      super(props)
      }

     render(){
        return(
            <View style={styles.localView}>

                <Image style={styles.container}
                    source = {{ uri: 'https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsnormal_93488.png' }} 
                    style = {{width: 200, height: 200, marginTop: 20,}} 
                />

                <Text style={{marginBottom:60}}>
                    Seu pagamento foi aprovado!
                </Text>

                
            </View>

            
            );
        }

}