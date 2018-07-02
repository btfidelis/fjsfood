import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import ListaRestaurante from './view/ListaRestaurante'
//import QRCodeScanner from './view/QRCodeScanner'
import Login from './view/Login'
import MenuRestaurante from './view/MenuRestaurante'
import MiniCurso from './view/MiniCurso'
import Avaliacao from './view/Avaliacao'
import Loading from './view/Loading'
//import Carrinho from './view/Carrinho'

import { createStackNavigator } from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: Home,
 // QRCodeScanner: QRCodeScanner,
  Details: DetailsScreen,
  ListaRestaurante: ListaRestaurante,
  Login: Login,
  MenuRestaurante: MenuRestaurante,
  MiniCurso:MiniCurso,
  Avaliacao: Avaliacao,
  Loading: Loading,
  //Carrinho: Carrinho,
  
  
},
{
  initialRouteName: 'Avaliacao',
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