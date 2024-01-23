import { StyleSheet } from 'react-native'
import { colors } from './colors'
import { getAdjustedHeight } from './globalUtilityFunctionsAndConstants'

export const globalStyle = StyleSheet.create({
  title: {
    color: colors.oceanEyesBlue,
    fontFamily: 'Inter',
    fontSize: getAdjustedHeight(24),
    lineHeight: 29,
    fontWeight: '600',
    letterSpacing: 0.48,
  },

  details: {
    fontSize: getAdjustedHeight(12),
    fontFamily: 'Inter',
    fontWeight: '400',
    color: colors.lightGrey,
  },

  width100Percent: {
    width: '100%',
  },

  flex: {
    flex: 1,
  },

  flexGrow: {
    flexGrow: 1,
  },
})
