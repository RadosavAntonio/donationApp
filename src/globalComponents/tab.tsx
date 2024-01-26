import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  tabId: number
  title: string
  isDisabled?: boolean
  onPress?: (tabId: number) => void
}

export const Tab = ({
  tabId,
  title,
  isDisabled,
  onPress = () => {},
}: Props): JSX.Element => {
  const [width, setWidth] = useState(0)
  const textRef = useRef(null)
  const paddingHorizontal = 33
  const tabWidth = {
    width: getAdjustedHeight(paddingHorizontal * 2 + width),
  }
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.tab, isDisabled && styles.inactiveTab, tabWidth]}
      onPress={() => onPress(tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width)
        }}
        ref={textRef}
        style={[styles.title, isDisabled && styles.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.oceanEyesBlue,
    height: getAdjustedWidth(50),
    justifyContent: 'center',
    borderRadius: getAdjustedHeight(50),
  },
  inactiveTab: {
    backgroundColor: colors.veryLightGrey,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(14),
    fontWeight: '500',
    lineHeight: getAdjustedWidth(17),
    color: colors.vogueWhite,
    textAlign: 'center',
  },
  inactiveTitle: {
    color: colors.lightGrey,
  },
})
