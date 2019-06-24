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
import Animated, { Transition, Easing } from 'react-native-reanimated';
// Import del Auth stack.
import LogInScreen from './screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen/RegisterScreen';
import AuthLoadingScreen from './screens/Auth/AuthLoading';
import { FontAwesome } from '@expo/vector-icons'
import * as constants from './constants/constants';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen';
import { useScreens } from 'react-native-screens';
import CheckPnD from './screens/CheckPnD/CheckPnD';

/*
 Primero se debe crear el stack de navegación para la autenticación del usuario.
 Luego se debe crear el stack de navegacion de tabs y el switch navigator para ir
 a la página principal. 
*/


useScreens();


// const SwitchHomeToChecks = createAnimatedSwitchNavigator({
//   Check: CheckStack
// })

const fade = (sceneProps) => {

  const { scene, position } = sceneProps;
  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  })

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  }
}


const CheckStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,

      navigationOptions: () => ({
        header: null
      })
    },
    CheckPnD: {
      screen: CheckPnD,
      navigationOptions: () => ({
        header: null
      })
    },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        return fade(props)
      }
    })
  }
  // {
  //   transitionConfig: () => {
  //     return {
  //       transitionSpec: {
  //         duration: 400,
  //         easing: Easing.in,
  //         timing: Animated.timing,
  //         useNativeDriver: true
  //       },
  //       screenInterpolator: (sceneProps) => {
  //         // const witdh = layout.initWidth;
  //         // const { index, route } = scene;
  //         // const params = route.params || {}; // <- That's new
  //         // const transition = params.transition || 'default'; // <- That's new
  //         return {
  //           fade: fade(sceneProps)
  //         };
  //       }
  //     }
  //   }
  // }
)

const AppStack = createBottomTabNavigator({
  Search: SearchScreen,
  Home: CheckStack,
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
      header: null,

    }),
  }
});



const RouteConfig = {
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
};


const StackNavigatorConfig = {
  initialRouteName: 'AuthLoading'
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
