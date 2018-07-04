import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TextInput, Button, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    cabecalhoAvaliacao:{
        margin:30,
        fontSize:30,
    },
    container:{
        alignItems: 'center',
        
    },
    ladoAlado:{
        flexDirection: 'row',
    },
    espaco:{
        margin:15,
    },

});

export default class Avaliacao extends Component {
    static navigationOptions = { //Colocar esse trecho sempre para dar "cor" ao app
        title: 'App',
      };
      
      constructor(props) {
        super(props);
        this.state = {
            varRecepcao:0,
            varEspera:0,
            varEstrutura:0,
            varSatisfacao:0,
        };
        this.estrelapreenchida= 'http://oi65.tinypic.com/2lvn606.jpg'
        this.estrelavazia = 'http://oi63.tinypic.com/2hoi4ok.jpg'
      } 


    onPress = () => { //Defini o que acontece quando o texto clicável é clicado
        this.setState({
            count: this.props.navigation.navigate('Home') // Mudar a variavel 'Home' para definir para ir onde ir para mudar o login/senha
        })
    }

    range(y) {
        const arr = []

        for(let i = 0; i < y; i++)
        {
            arr.push(i);
            
        }
        return arr
    }

    render() {
    return (
        <View style={styles.container}>
            <View> 
                <Text style={styles.cabecalhoAvaliacao}>  
                    Avaliação 
                </Text>
            </View>
            <View style={styles.espaco}>
                <View style={styles.ladoAlado}>
                    <Image
                    style={{width: 35, height: 35}}
                    source={{uri: 'http://oi66.tinypic.com/65vdqa.jpg'}} 
                    />
                    <Text style={{fontSize:20}}>
                        <Text>   </Text>Recepção
                    </Text>

                </View>
                <View style={styles.ladoAlado}>
                    {this.range(5).map(x => {
                        console.log(x)
                        if(x < this.state.varRecepcao)
                        {
                            return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varRecepcao:x+1}))}>
                                        <Image
                                            style={{width: 40, height: 40}}
                                            source={{uri: this.estrelapreenchida}} 
                                        /> 
                                   </TouchableHighlight>)
                        }
                        return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varRecepcao:x+1}))}>
                                    <Image
                                        style={{width: 40, height: 40}}
                                        source={{uri: this.estrelavazia}} 
                                    />
                                </TouchableHighlight>)

                    })}
                </View>
                
            </View> 


            <View style={styles.espaco}>
                <View style={styles.ladoAlado}>
                    <Image
                    style={{width: 35, height: 35}}
                    source={{uri: 'http://i68.tinypic.com/2ewhao1_th.jpg'}} 
                    />
                    <Text style={{fontSize:20}}>
                    <Text>   </Text>Espera
                    </Text>

                </View>
                <View style={styles.ladoAlado}>
                    {this.range(5).map(x => {
                            console.log(x)
                            if(x < this.state.varEspera)
                            {
                                return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varEspera:x+1}))}>
                                            <Image
                                                style={{width: 40, height: 40}}
                                                source={{uri: this.estrelapreenchida}} 
                                            /> 
                                    </TouchableHighlight>)
                            }
                            return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varEspera:x+1}))}>
                                        <Image
                                            style={{width: 40, height: 40}}
                                            source={{uri: this.estrelavazia}} 
                                        />
                                    </TouchableHighlight>)
                                

                        })}
                </View>
                
            </View>

            <View style={styles.espaco}>
                <View style={styles.ladoAlado}>
                    <Image
                    style={{width: 35, height: 35}}
                    source={{uri: 'http://i66.tinypic.com/11l3qmc_th.jpg'}} 
                    />
                    <Text style={{fontSize:20}}>
                    <Text>   </Text>Estrutura
                    </Text>

                </View>
                <View style={styles.ladoAlado}>
                    {this.range(5).map(x => {
                                console.log(x)
                                if(x < this.state.varEstrutura)
                                {
                                    return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varEstrutura:x+1}))}>
                                                <Image
                                                    style={{width: 40, height: 40}}
                                                    source={{uri: this.estrelapreenchida}} 
                                                /> 
                                        </TouchableHighlight>)
                                }
                                return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varEstrutura:x+1}))}>
                                            <Image
                                                style={{width: 40, height: 40}}
                                                source={{uri: this.estrelavazia}} 
                                            />
                                        </TouchableHighlight>)

                            })}

                </View>
                
            </View>

            <View style={styles.espaco}>
                <View style={styles.ladoAlado}>
                    <Image
                    style={{width: 35, height: 35}}
                    source={{uri: 'http://i68.tinypic.com/28ivryc_th.jpg'}} 
                    />
                    <Text style={{fontSize:20}}>
                    <Text>   </Text>Satisfação
                    </Text>

                </View>
                <View style={styles.ladoAlado}>
                {this.range(5).map(x => {
                            console.log(x)
                            if(x < this.state.varSatisfacao)
                            {
                                return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varSatisfacao:x+1}))}>
                                            <Image
                                                style={{width: 40, height: 40}}
                                                source={{uri: this.estrelapreenchida}} 
                                            /> 
                                    </TouchableHighlight>)
                            }
                            return (<TouchableHighlight underlayColor='white' onPress={()=> this.setState(()=>({varSatisfacao:x+1}))}>
                                        <Image
                                            style={{width: 40, height: 40}}
                                            source={{uri: this.estrelavazia}} 
                                        />
                                    </TouchableHighlight>)

                        })}

                </View>
                
            </View>
            <View style={{margin:15}}>
                <Button style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="   Enviar Avaliação   "
                    color="#FFC107"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

            
            
        </View>
    );
  }
}; 

