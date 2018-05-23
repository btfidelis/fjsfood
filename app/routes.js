import Home from './view/Home'
import DetailsScreen from './view/DetailsScreen'
import Login from './view/Login'
import MenuRestaurante from './view/MenuRestaurante'

import { createStackNavigator } from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: Home,
  Login: Login,
  MenuRestaurante: MenuRestaurante,
  Details: DetailsScreen
},
{
  initialRouteName: 'MenuRestaurante',
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