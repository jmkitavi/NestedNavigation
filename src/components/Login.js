// Login.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen.</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    height: 30,
    width: '40%',
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login
