import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import ListaRestaurante from './view/ListaRestaurante'

import { createStackNavigator } from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
  ListaRestaurante: ListaRestaurante,
},
{
  initialRouteName: 'ListaRestaurante',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})


export default AppNavigator