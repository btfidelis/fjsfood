import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  Image,
  TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import { colors } from './../utils/styles'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        //color: '#FFC107',
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

const styleList = StyleSheet.create({
  list: { flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignContent: 'center' },
  cartBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 100,
    height: 50,
  }
})


class Info extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Menu extends Component {
  
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState(() => ({
      menu: [
        { key: 'Nome2', categoria: 'categoria2', valor: '$$', dist: '10km', img: 'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg', qtn: 0 },
        { key: 'Nome3', categoria: 'categoria2', valor: '$$', dist: '10km', img: 'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg', qtn: 0 },
      ]
    }))
  }

  setItemQtn(itemId, number) {
    const items = this.state.menu.map((x) => {
      const unsignedOperation = x => {
        if (x < 0) {
          return 0
        }

        return x
      }

      if (x.key === itemId) {
        return Object.assign({}, x, { qtn: unsignedOperation(x.qtn + number) })
      }

      return x
    })
    this.setState({ menu: items })
  }

  render() {
    
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList 
          data={this.state.menu || []}
          ItemSeparatorComponent={() => 
            <View
              style={{
                height: 1,
                marginBottom: 10,
                marginTop: 10,
                width: "100%",
                backgroundColor: colors.dividerColor,
              }}
            />
          }
          renderItem={({item}) => { 
            return (
              <View style={styleList.list}>
                <Image source={{ uri: item.img }} style={{ flex: 2, width: 100, height: 100 }} />
                <Text style={{ flex:2, marginLeft: 5, }}>
                  {item.key + "\n" + item.categoria + "\n" + item.valor + "\n"}
                </Text>
                <TouchableHighlight style={styleList.cartBtn} onPress={() => this.setItemQtn(item.key, -1)} >
                  <Text style={{ flex: 1, fontSize: 30, marginLeft: 16  }} >-</Text>
                </TouchableHighlight>
                <Text style={{ flex: 1, marginLeft: 35, fontSize: 24 }} >{item.qtn}</Text>
                <TouchableHighlight style={styleList.cartBtn} onPress={() => this.setItemQtn(item.key, 1)}>
                  <Text style={{ flex: 1, fontSize: 30, marginLeft: 16  }} >+</Text>
                </TouchableHighlight>
              </View> 
            )
          }}
        />
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
          { key:'abc1', pedido: 'Pedido Numero 1', preco: '$$', quantidade: '2' },
          { key:'abc2', pedido: 'Pedido Numero 2', preco: '$$', quantidade: '1' },
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
    Menu: Menu,
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