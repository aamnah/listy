import 'react-native-gesture-handler'
import React, { createContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'react-native'

import HomeScreen from 'screens/HomeScreen'
import ListScreen from 'screens/ListScreen'

const Stack = createStackNavigator()

const NavigationContext = createContext({})
NavigationContext.displayName = 'NavigationContext'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Listy' }}
        />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
