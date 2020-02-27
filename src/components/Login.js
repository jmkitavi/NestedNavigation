// Login.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
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
})

export default Login
