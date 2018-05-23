import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import QRCodeScanner from './view/QRCodeScanner'
import Login from './view/Login'
import MenuRestaurante from './view/MenuRestaurante'

import { createStackNavigator } from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: Home,
  QRCodeScanner: QRCodeScanner,
  Details: DetailsScreen,
  Login: Login,
  MenuRestaurante: MenuRestaurante,
},
{
  initialRouteName: 'Home',
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