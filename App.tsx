import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigation/MainNavigation'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App
