// Settings.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.openDrawer()}>
          <Text>Open Drawer</Text>
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

export default Settings
