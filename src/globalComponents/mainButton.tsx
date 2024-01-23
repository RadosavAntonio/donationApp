import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  title: string
  isDisabled?: boolean
  onPress?: () => void
}

export const MainButton = ({
  title,
  isDisabled,
  onPress = () => {},
}: Props): JSX.Element => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.oceanEyesBlue,
    height: getAdjustedWidth(55),
    justifyContent: 'center',
    borderRadius: getAdjustedHeight(50),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(16),
    fontWeight: '500',
    lineHeight: getAdjustedWidth(19),
    color: colors.vogueWhite,
    textAlign: 'center',
  },
})
