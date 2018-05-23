import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, List, ListItem  } from 'react-native'

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
    flex:1,
    margin: 10
     
    },

  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
    display: 'block',
  },


});




export default class ListaRestaurante extends Component { //app nome do arquivo
    static navigationOptions = {
      title: 'App',
    };

    constructor(props)
  {
    super(props);
 
    this.state = { FlatListItems: [

      {key: 'Nome', categoria: 'categoria', valor: '$$', dist:'12km'},
      {key: 'Nome2', categoria: 'categoria2', valor: '$$', dist:'10km'},

    ]}
  }





    render() {
      return (
      <View style={styles.MainContainer}>
          <FlatList
              data={ this.state.FlatListItems }
              renderItem={({item}) => 
              <Text style={styles.item} > 
              {item.key} 
              <Text>{item.categoria} </Text>
              <Text>{item.valor} </Text>
              
              
              </Text> }
             //<Text style={styles.item} > {item.categoria} </Text> 
               //<Text style={styles.item} > {item.valor} </Text>
               //<Text> style ={styles.item} > {item.dist} </Text>}
         />

      </View>
        
       
     
      );
    }
  }
