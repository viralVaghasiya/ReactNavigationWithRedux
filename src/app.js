
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen, title: 'Login' },
  Main: { screen: MainScreen, title: 'Home' },
  Profile: { screen: ProfileScreen, title: 'Profile' }
});

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}

export default App;
