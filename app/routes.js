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

import { createStackNavigator } from 'react-navigation'

import { colors } from './utils/styles'

const AppNavigator = createStackNavigator({
  Home: Home,
  QRCodeScanner: QRCodeScanner,
  Details: DetailsScreen,
  ListaRestaurante: ListaRestaurante,
  Login: Login,
  MenuRestaurante: MenuRestaurante,
  Avaliacao: Avaliacao,
  

  
  
},
{
  initialRouteName: 'Avaliacao',
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


export default AppNavigator