import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  onPress: () => void
}

export const BackButton = ({ onPress }: Props): JSX.Element => {
  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.vogueWhite,
    width: getAdjustedWidth(44),
    height: getAdjustedWidth(44),
    borderRadius: getAdjustedWidth(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
