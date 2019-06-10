import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LogIn from './screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen/RegisterScreen';
import * as Font from 'expo-font';



const RouteConfig = {
  LoginScreen: {
    screen: LogIn,
    navigationOptions: () => ({
      header: null
    }),
  },
  Register: RegisterScreen
}

const StackNavigatorConfig = {
  initialRouteName: 'LoginScreen',
}

const AppNavigator = createStackNavigator(RouteConfig, StackNavigatorConfig);
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
