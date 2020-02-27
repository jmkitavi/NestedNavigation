// ProfileSettings.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class ProfileSettings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Settings Screen</Text>
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

export default ProfileSettings
