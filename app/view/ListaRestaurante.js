import React, { Component } from 'react'
import { Alert, TouchableHighlight, AppRegistry, StyleSheet, View, Text, FlatList, List, ListItem, Image, Button  } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    backgroundColor: '#fff',
    //alignItems: 'left',
    marginTop:50,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  MainContainer :{
   
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    margin: 10
     
    },

  item: {
    padding: 20,
    fontSize: 14,
    height: 100,
    display: 'flex',
    flexDirection: 'row'
  },


});




export default class ListaRestaurante extends Component { //app nome do arquivo
    static navigationOptions = {
      title: 'App',
    };

    constructor(props)
  {
    super(props);
 //declaracao das variaveis
    this.state = { FlatListItems: [

      {key: 'Nome', categoria: 'categoria', valor: '$$', dist:'12km', img:'http://zanottirefrigeracao.com.br/blog/wp-content/uploads/segmento-restaurante-ecomanda-705x296.jpg' },
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km', img:'http://www.restauranteskylab.com.br/wp-content/uploads/2016/06/restaurante-skylab-o-restaurante-capa.jpg'},

    ]}
  }

 FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#FFC107",
        }}
      />
    );
  }


    render() {
      return (
      <View style={styles.MainContainer}>
          <FlatList
            data = { this.state.FlatListItems }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={({item}) => 
            <TouchableHighlight onPress={() => alert(item.key)} >  
              <View style={{flex:1, flexDirection: 'row', display: 'flex' }}>
                <Image source = {{ uri: item.img/*uri: 'http://zanottirefrigeracao.com.br/blog/wp-content/uploads/segmento-restaurante-ecomanda-705x296.jpg'*/ }} style = {{width: 100, height: 70, marginTop: 20}}/>
                <Text style={styles.item} > 
                  {item.key+"\n"+item.categoria+ "\n"+item.valor + "\n"}
                </Text> 
              </View> 
            </TouchableHighlight>
            }
              
             
             
             //<Text style={styles.item} > {item.categoria} </Text> 
               //<Text style={styles.item} > {item.valor} </Text>
               //<Text> style ={styles.item} > {item.dist} </Text>}
         />

      </View>
        
       
     
      );
    }
  }

  //Scroll da tela