import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  StackNavigator
} from "react-navigation";
// import SignUp from './src/components/signup';
// import SignIn from './src/components/signin';
import Home from "./src/components/home";
import AuthLoading from "./authloading";
import Login from "./src/authComps/login";
import ForGetScreen from "./src/authComps/forgetscreen";
import SignUp from "./src/authComps/signup";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);
const AuthStack = createStackNavigator(
  {
    SignIn: Login,
    SignUp: SignUp,
    ForGetScreen: ForGetScreen
    // SignIn: SignIn,
    // SignUp: SignUp,
  },
  {
    initialRouteName: "SignIn"
  }
);

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading",
    header: null
  }
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainNavigator />;
  }
}

export default App;
