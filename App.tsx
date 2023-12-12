import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { StackNavigator } from './src/routes/StackNavigator'

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    )
}
