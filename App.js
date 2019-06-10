import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';

// Import de ventanas del tab screen.
import HomeScreen from './screens/Tabs/Home/Homescreen';
import SearchScreen from './screens/Tabs/Search/Searchscreen';
import CategoryScreen from './screens/Tabs/Categories/CateScreen';

// Import del Auth stack

import LogInScreen from './screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen/RegisterScreen';
import AuthLoadingScreen from './screens/Auth/AuthLoading';

/*
 Primero se debe crear el stack de navegación para la autenticación del usuario.
 Luego se debe crear el stack de navegacion de tabs y el switch navigator para ir
 a la página principal. 
*/

const AppStack = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Categories: CategoryScreen
});

const AuthStack = createStackNavigator({
  Signin: {
    screen: LogInScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  Register: RegisterScreen
})

const RouteConfig = {
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
}

const StackNavigatorConfig = {
  initialRouteName: 'AuthLoading',
}

const AppNavigator = createSwitchNavigator(RouteConfig, StackNavigatorConfig) 
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'GorditaMedium': require('./assets/fonts/Gordita-Medium.ttf'),
      'GorditaBold': require('./assets/fonts/Gordita-Bold.ttf'),
      'GorditaRegular': require('./assets/fonts/Gordita-regular.ttf'),
      'GorditaBlack': require('./assets/fonts/Gordita-Black.ttf')
    });

    this.setState({ fontLoaded: true });
  }



  render() {
    return (
      this.state.fontLoaded ? (
        <AppContainer />
      ) : null
    )
  }
}
