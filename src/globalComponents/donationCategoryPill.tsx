import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  title: string
  pillWidth?: number
}

export const DonationCategoryPill = ({
  title,
  pillWidth,
}: Props): JSX.Element => {
  const [width, setWidth] = useState(0)
  const textRef = useRef(null)
  const paddingHorizontal = 10
  const badgeWidth = {
    width: getAdjustedHeight(paddingHorizontal * 2 + width),
  }
  return (
    <View style={[styles.badge, badgeWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(pillWidth || event.nativeEvent.lines[0].width)
        }}
        ref={textRef}
        style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.caraPink700,
    justifyContent: 'center',
    borderRadius: getAdjustedHeight(50),
    paddingVertical: 6,
  },

  title: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(10),
    fontWeight: '600',
    lineHeight: getAdjustedWidth(12),
    color: colors.vogueWhite,
    textAlign: 'center',
  },
})
