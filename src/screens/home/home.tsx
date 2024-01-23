import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { getFontFamily } from '../../../assets/getFontFamily'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../assets/colors'

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text
        style={{ fontSize: 30, fontFamily: getFontFamily({ weight: '700' }) }}>
        DONATION_APP
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },
})
