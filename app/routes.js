import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import ListaRestaurante from './view/ListaRestaurante'
import QRCodeScanner from './view/QRCodeScanner'
import OpcaoPagamento from './view/OpcaoPagamento'
import Carrinho from './view/Carrinho'
import Login from './view/Login'
import MenuRestaurante from './view/MenuRestaurante'
import Avaliacao from './view/Avaliacao'
import Loading from './view/Loading'
//import Carrinho from './view/Carrinho'
import ConfirmacaoPagamento from './view/ConfirmacaoPagamento'
import InformacoesUsuario from './view/InformacoesUsuario'
import Info from './view/Info'

import AuthLoadingScreen from './components/AuthLoading'

import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { colors } from './utils/styles'

const AuthStack = createStackNavigator({
  Login: Login
})


const AppStack = createStackNavigator({
  Home: Home,
  QRCodeScanner: QRCodeScanner,
  Details: DetailsScreen,
  ListaRestaurante: ListaRestaurante,
  MenuRestaurante: MenuRestaurante,
  Avaliacao: Avaliacao,
  OpcaoPagamento: OpcaoPagamento,
  Carrinho: Carrinho,
  ConfirmacaoPagamento: ConfirmacaoPagamento,
  InformacoesUsuario: InformacoesUsuario,
  Info: Info,
},
{
  initialRouteName: 'Carrinho',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.darkPrimaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)