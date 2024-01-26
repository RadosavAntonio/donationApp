import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

interface Props {
  onSearch?: (val: string) => void
  placeholder?: string
}

export const Search = ({
  onSearch = () => {},
  placeholder = 'Search',
}: Props): JSX.Element => {
  const [search, setSearch] = useState('')

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue)
    onSearch(searchValue)
  }
  return (
    <Pressable style={styles.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color={colors.oceanEyesBlue}
        size={getAdjustedWidth(22)}
      />
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
        placeholder={placeholder}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: getAdjustedHeight(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(14),
    lineHeight: getAdjustedWidth(14),
    color: colors.lightGrey,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getAdjustedHeight(16),
    backgroundColor: colors.veryLightGrey,
    height: getAdjustedHeight(50),
    borderRadius: getAdjustedHeight(15),
  },
})
