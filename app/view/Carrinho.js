import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  Image,
  TouchableHighlight,
  Button } from 'react-native';
import Info from './Info'
import { formataPreco } from './../utils/helpers'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { colors } from './../utils/styles'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 15,
    },

    tituloRestaurante:{
        paddingLeft:20,
        fontSize: 24,
       // marginTop:10,
        padding:10,
        marginTop:20,
    },

    CorMenu:{
        color: '#FFC107',
        
    },

    SubCarrinho:{
        color: '#FFC107',
        borderBottomColor: '#FFC107',
        borderBottomWidth: 3,
    },

    ButtonStyle: {
      display: 'flex',
      //flexDirection: 'column',
      //height: '23%',
      alignItems: 'center',
      //justifyContent: 'space-between',
      marginTop: 180,
      
  },

    flat:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        paddingLeft: 20,
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

var contentsCarrinho = []


class Menu extends Component {
  
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState(() => ({
      menu: [
        { key: 'a123', name: 'Coca-Cola Lata', categoria: 'Bebida', valor: 4, img: 'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg', qtn: 0 },
        { key: 'b246@', name: 'Pastel Forno', categoria: 'Food', valor: 5, img: 'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg', qtn: 0 },
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
    contentsCarrinho = items
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
                  {item.name + "\n" + item.categoria + "\nR$ " + formataPreco(item.valor) + "\n"}
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
        { key: 'abc1', pedido: 'Pedido Numero 1', preco: 7, qtn: 2 },
        { key: 'abc2', pedido: 'Pedido Numero 2', preco: 4, qtn: 1 },
      ]
    }

  }
  

  componentDidMount() {

    const update = () => { 
      this.setState({  
        FlatListItems: contentsCarrinho.filter(x => x.qtn > 0)
      }) 
    }

    this.props.navigation.addListener('willFocus', update.bind(this));
  }
  
  static navigationOptions = {
    title: 'Carrinho',
  };



  render() {
    return (
      <View>
        <Text style={styles.tituloRestaurante}>
          Menta Café
        </Text>

        <FlatList
          data = { this.state.FlatListItems }
          renderItem={({item}) =>      
            <Text style={styles.flat}>
              {item.name+"       R$ "+formataPreco(item.valor || '')+ "\n"+item.qtn + "x\n"}
            </Text>         
          }
        />
        <Text style={{paddingLeft: 40, marginBottom: 40, marginTop: 20, fontSize: 16}}>
          Total: R$ {formataPreco(this.state.FlatListItems.reduce((ac, valorAtual)=> {
            return ac + (valorAtual.valor * valorAtual.qtn)
          },0))}
        </Text>

        <Button  
          style={styles.ButtonStyle}
          onPress={() => this.props.navigation.navigate('OpcaoPagamento')}
          title=" Efetuar Pagamento "
          color="#FFC107"
          accessibilityLabel="Learn more about this purple button"
        />





      </View>
    )
  }

}


export default createMaterialTopTabNavigator(
  {
    Menu: Menu,
    Carrinho: Carrinho,
    Info: Info
  },
  {
    initialRouteName: 'Menu',
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