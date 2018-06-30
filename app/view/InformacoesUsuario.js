import React, { Component } from 'react'

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
          padding: 25,
          fontSize: 14,
          height: 70,
          display: 'flex',
          justifyContent: 'center',
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
      
            {
                opcao: 'Último Pagamento', 
                icone: 'http://i67.tinypic.com/9pqkom_th.png', 
            },
            {
                opcao: 'Configurações',
                icone: 'http://oi64.tinypic.com/23hwv42.jpg', 
            },
            {
                opcao: 'Ajuda ',
                icone: 'http://i63.tinypic.com/5lp65g_th.png', 
            },
           
          ]}
        }
      
       FlatListItemSeparator = () => {
          return (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "#bdbdbd",
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
                  <TouchableHighlight onPress={() => alert(item.opcao) } underlayColor="white" >
                  {/**/}  
                    <View style={{flex:1, flexDirection: 'row', display: 'flex' }}>
                      <Image source = {{ uri: item.icone/*uri: 'http://zanottirefrigeracao.com.br/blog/wp-content/uploads/segmento-restaurante-ecomanda-705x296.jpg'*/ }} style = {{width: 30, height: 30, marginTop: 20}}/>
                      <Text style={styles.item} > 
                        {item.opcao}
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