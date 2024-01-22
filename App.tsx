import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getFontFamily } from './assets/getFontFamily'

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text
        style={{ fontSize: 30, fontFamily: getFontFamily({ weight: '700' }) }}>
        DONATION_APP
      </Text>
    </SafeAreaView>
  )
}

export default App
