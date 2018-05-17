import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button } from 'react-native';

import { createStackNavigator } from 'react-navigation'

class App extends Component { //app nome do arquivo
  static navigationOptions = {
    title: 'App',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>teste12334!</Text>
        <Text>kkkkkkkkkkk</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pedidos</Text>
        <Button
          title="Ler Código"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Pesquisar Restaurantes"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootStack = createStackNavigator({
  Home: App,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
})

// export default class Root extends Component { 
//   render() {
//     return (
//       <RootStack />
//     )
//   }
// }