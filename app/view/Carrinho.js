import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import { colors } from './../utils/styles'

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


class Info extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}




class Carrinho extends Component { //app nome do arquivo
    constructor(props) {
      super(props);

      //declaracao das variaveis
      this.state = { 
        FlatListItems: [ 
          { pedido: 'Pedido Numero 1', preco: '$$', quantidade: '2' },
          { pedido: 'Pedido Numero 2', preco: '$$', quantidade: '1' },
        ]
      }
    }

  
    static navigationOptions = {
      title: 'Carrinho',
    };



render() {
    return (
      <View style={styles.container}>

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


export default createMaterialTopTabNavigator(
  {
    Menu: SettingsScreen,
    Carrinho: Carrinho,
    Info: Info
  },
  {

    tabBarOptions: {
      activeTintColor: colors.lightPrimaryColor,
      inactiveTintColor: 'white',
      style: {
        backgroundColor: colors.accentColor,
      },

      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
    }
  }

)