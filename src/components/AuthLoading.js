// AuthLoading.js
import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
class AuthLoading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: true,
    }
  }

  checkLoggedInStatus = () => {
    if (this.state.loggedIn) {
      return this.props.navigation.navigate('Home')
    }

    return this.props.navigation.navigate('Login')
  }

  componentDidMount() {
    this.checkLoggedInStatus()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoading Screen</Text>
        <ActivityIndicator />
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
