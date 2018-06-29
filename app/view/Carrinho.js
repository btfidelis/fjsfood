import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, ListItem, TextInput, Button, Text, TouchableHighlight, FlatList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        color: '#FFC107',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    CorMenu:{
        color: '#FFC107',
        
    },

    SubCarrinho:{
        color: '#FFC107',
        borderBottomColor: '#FFC107',
        borderBottomWidth: 3,
    },

    flat:{
        marginTop: 10,display: 'flex',
        flexDirection: 'column',
        color: 'black',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

   
});



export default class Carrinho extends Component { //app nome do arquivo
    constructor(props) {
      super(props);

      //declaracao das variaveis
    this.state = { FlatListItems: [

        {pedido: 'Pedido Numero 1', preco: '$$', quantidade: '2' },
        {pedido: 'Pedido Numero 2', preco: '$$', quantidade: '1' },
        
      ]}
    }

  
    static navigationOptions = {
      title: 'App',
    };



render() {
    return(
        <View style={styles.container}>
            <Text style={styles.CorMenu}
                onPress={() => this.props.navigation.navigate('Login')} >
                 Menu 
            </Text>
            <Text style= {styles.SubCarrinho}
                onPress={() => this.props.navigation.navigate('Login')}>
                 Carrinho 
            </Text>
            <Text style={styles.CorMenu}
                onPress={() => this.props.navigation.navigate('Login')}>
                 Info 
            </Text>
    
            <FlatList
            data = { this.state.FlatListItems }
            renderItem={({item}) => 
            
                <Text style={styles.flat} > 
                  {item.pedido+"\n"+item.preco+ "\n"+item.quantidade + "\n"}
                </Text>
             
            }
            />
        </View>




    )

}

};