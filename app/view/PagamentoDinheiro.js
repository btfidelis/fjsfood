import React, { Component } from 'react';
import { 
    Alert, 
    TouchableHighlight, 
    AppRegistry, 
    StyleSheet, 
    View, 
    Text, 
    FlatList, 
    List, 
    ListItem, 
    Image, 
    Button  } from 'react-native'

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
            padding: 10,
        },

        info:{
            margin:20,
            textAlign: 'center'
            
        },

        button:  {
            marginTop: 20
        },

        codigo: {
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#bdbdbd',
            padding: 10,
            fontSize:24,
            fontWeight: 'bold',
            marginBottom: 30,
        }
    })



    export default class PagamentoDinheiro extends Component { //app nome do arquivo
        constructor(props) {
          super(props);
        }

    render() {
        return(
            <View style={styles.localView}>
                 <Image style={styles.container}
                    source = {{ uri: 'http://i63.tinypic.com/2ir9o9x_th.png' }} 
                    style = {{width: 180, height: 180, marginTop: 20,}} 
                />

                <Text style={styles.info}>
                    Apresente o código a seguir no caixa e efetue o pagamento de seu pedido!
                </Text>

                 <Text style={styles.codigo}>
                     JKL-0345
                 </Text>

                  

            </View>

        )
    }
    };
    