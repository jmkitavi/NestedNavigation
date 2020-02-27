// AuthLoading.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class AuthLoading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoading Screen</Text>
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

export default AuthLoading
