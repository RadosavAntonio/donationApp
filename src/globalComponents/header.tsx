import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  type?: number
  title?: string
  textColor?: string
}

export const Header = ({
  type = 1,
  title = '',
  textColor = colors.vogueWhite,
}: Props): JSX.Element => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1
      case 2:
        return styles.title2
      case 3:
        return styles.title3
    }
  }
  return (
    <View>
      <Text style={[styleToApply(), { color: textColor }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(24),
    lineHeight: getAdjustedWidth(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(18),
    lineHeight: getAdjustedWidth(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(16),
    lineHeight: getAdjustedWidth(19),
    fontWeight: '600',
  },
})
