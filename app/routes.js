import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import ListaRestaurante from './view/ListaRestaurante'
import QRCodeScanner from './view/QRCodeScanner'
import OpcaoPagamento from './view/OpcaoPagamento'
import Carrinho from './view/Carrinho'
import Login from './view/Login'
import MenuRestaurante from './view/MenuRestaurante'
import ConfirmacaoPagamento from './view/ConfirmacaoPagamento'
import InformacoesUsuario from './view/InformacoesUsuario'
import PagamentoDinheiro from './view/PagamentoDinheiro'
import Info from './view/Info'

import { createStackNavigator } from 'react-navigation'

import { colors } from './utils/styles'

const AppNavigator = createStackNavigator({
  Home: Home,
  QRCodeScanner: QRCodeScanner,
  Details: DetailsScreen,
  ListaRestaurante: ListaRestaurante,
  Login: Login,
  MenuRestaurante: MenuRestaurante,
  OpcaoPagamento: OpcaoPagamento,
  Carrinho: Carrinho,
  ConfirmacaoPagamento: ConfirmacaoPagamento,
  InformacoesUsuario: InformacoesUsuario,
  Info: Info,
  PagamentoDinheiro:PagamentoDinheiro,

},
{
  initialRouteName: 'PagamentoDinheiro',
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


export default AppNavigator