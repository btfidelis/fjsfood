
import React, { Component } from 'react';

import AppNavigation from './routes'

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


export default class Root extends Component { 
  render() {
    return (
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    )
  }
}

