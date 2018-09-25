
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => alert("Login")}>
          <Text style={styles.welcome}>Login Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default LoginScreen;
