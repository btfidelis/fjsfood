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
            //marginTop: 2,
            //flexDirection: 'column',
            paddingLeft:15,
            //textAlign: 'left',
            //justifyContent: 'space-between',
          },

        textoTitulo: {
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
            paddingLeft:15,
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
                    informacaoTiposS:  'A prazo',
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
                     {this.state.titulo}
                    </Text>   

                     <Text style ={styles.textoSecundario}>
                        {this.state.informacao}   
                    </Text> 

                    <Text style ={styles.textoTitulo}>
                        {this.state.tituloFormas}
                    </Text>

                    <Text style ={styles.textoSecundario}>
                        {this.state.informacaoTipos}{"\n"}
                        {this.state.informacaoOpcoes}{"\n"}{"\n"}
                        {this.state.informacaoTiposS}{"\n"}
                        {this.state.informacaoOpcoesS}
                    </Text>

                </View>

            ); 
        }


    }