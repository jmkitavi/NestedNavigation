// App.js
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './components/Login'
import AuthLoading from './components/AuthLoading'
import Home from './components/Home'
import Settings from './components/Settings'
import { Monday, Tuesday, Wednesday } from './components/TabScreens'

const WeekDays = createBottomTabNavigator(
  {
    Monday,
    Tuesday,
    Wednesday,
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home, 
    Settings,
    WeekDays, // add bottom navigator here
  },
  {
    initialRouteName: 'Home',
  },
)

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading,
    Login,
    DrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const AppNavigator = createAppContainer(switchNavigator)

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
