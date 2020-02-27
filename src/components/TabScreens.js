// TabScreens.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export class Monday extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Monday Blues</Text>
      </View>
    )
  }
}

export class Tuesday extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tuesday Thoughts</Text>
      </View>
    )
  }
}

export class Wednesday extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wednesday Wisdom</Text>
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
