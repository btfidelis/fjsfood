import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui'


const uiTheme = {
  palette: {
    primaryColor: COLOR.orange500,
    accentColor: COLOR.deepOrange500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
}

export default class DetailsScreen extends Component {
    static navigationOptions = {
      title: 'Home'
    };

    render() {
      return (
        <ThemeProvider uiTheme={uiTheme}>

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
        </ThemeProvider>

      );
    }
}
