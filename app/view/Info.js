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
        textoprincipal: {
          //flex: 1,
          //alignItems: 'left',
          marginTop: 20,
          padding: 15,
          //flexDirection: 'column',
        },

        textoSecundario: {

            //alignItems: 'left',
            marginTop: 10,
            
            //flexDirection: 'column',
            padding:15,
            justifyContent: 'space-between',
          },

        textoTitulo: {
            fontWeight: 'bold',
            marginTop: 10,
            padding:15,
        },
    
    });


    export default class Info extends Component { //app nome do arquivo
        static navigationOptions = {
          title: 'App',
        };
    
        constructor(props)
         {
            super(props);
            this.state = { 
      
                
                    titulo: "Horário de atendimento",
                    informacao:  'Das 19:00 as 23:00', 
                    tituloFormas: 'Formas de Pagamento',
                    informacaoTipos:  'À vista',
                    informacaoOpcoes: 'Visa, Master, BanriCompras',
                    informcaoTiposS:  'A prazo',
                    informacaoOpcoesS: 'Visa, Master, BanriCompras'
                };
               
              
        }

    

        render() {
            return (
                <View>
                   <Text style={styles.textoprincipal}>
                        Vivamus mattis lorem ut lacus pharetra, non viverra nibh posuere.
                        Vivamus accumsan vehicula augue ut eleifend. 
                        Etiam hendrerit dui lacus, eget fringilla felis gravida ut. 
                        Vivamus lobortis ipsum at placerat venenatis.
                    </Text>

                    <Text style ={styles.textoTitulo}>
                    {this.state.titulo}{'\n'}{'\n'}
                  
                    </Text>   

                     <Text style ={styles.container}>
                        
                    </Text> 

                </View>

            ); 
        }


    }