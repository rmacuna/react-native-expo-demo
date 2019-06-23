import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import * as Font from 'expo-font';

import { Dimensions, Platform } from 'react-native';

// Import de ventanas del tab screen.
import HomeScreen from './screens/Tabs/Home/Homescreen';
import SearchScreen from './screens/Tabs/Search/Searchscreen';
import CategoryScreen from './screens/Tabs/Categories/CateScreen';

// Import del Auth stack.
import LogInScreen from './screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen/RegisterScreen';
import AuthLoadingScreen from './screens/Auth/AuthLoading';
import { FontAwesome } from '@expo/vector-icons'
import * as constants from './constants/constants';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen';


/*
 Primero se debe crear el stack de navegación para la autenticación del usuario.
 Luego se debe crear el stack de navegacion de tabs y el switch navigator para ir
 a la página principal. 
*/
const AppStack = createBottomTabNavigator({
  Search: SearchScreen,
  Home: HomeScreen,
  Categories: CategoryScreen
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let iconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Search') {
          iconName = 'search';
          // En caso tal de querer tener un icono con una badge.
          // iconComponent = HomeIconWithBadge;
        } else if (routeName === 'Home') {
          iconName = 'home';
        } else {
          iconName = 'list'
        }
        return <FontAwesome name={iconName} size={22} color={tintColor} />
      }
    }),
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: '#fff',
      activeTintColor: constants.COLOR_PRIMARY,
      adaptive: true,

      labelStyle: {
        fontSize: 12,
        paddingBottom: Platform.OS === "android" ? 10 : null,
        fontFamily: 'GorditaMedium'
      },
      style: {
        height: Platform.OS === "android" ? 70 : 50,
        backgroundColor: constants.COLOR_SECONDARY,
      },
    }
  });

const AuthStack = createStackNavigator({
  Signin: {
    screen: LogInScreen,
    navigationOptions: () => ({
      header: null
    })
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      headerStyle: {
        ...constants.HEADER_REGISTER_STYLE.HeaderBar
      },
      headerTintColor: constants.COLOR_PRIMARY,
      headerTitleStyle: {
        ...constants.HEADER_REGISTER_STYLE.HeaderTitle
      }
    })
  },

  ForgotPass: {
    screen: ForgotPasswordScreen,
    navigationOptions: () => ({
      
    })
  }
});

const RouteConfig = {
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
};


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
