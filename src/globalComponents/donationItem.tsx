import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'
import { Header } from './header'
import { useSelector } from 'react-redux'
import { AppStore } from '../store/store'
import { Categories, CategoriesData } from '../store/reducers/categories'
import { DonationCategoryPill } from './donationCategoryPill'

interface Props {
  donationItemId: number
  imageUrl: string
  donationTitle: string
  price: number
  onPress: () => void
}

export const DonationItem = ({
  donationItemId,
  imageUrl,
  donationTitle,
  price,
  onPress,
}: Props): JSX.Element => {
  const categories = useSelector(
    (store: AppStore): Categories => store.categories,
  )

  const badgeTitle =
    categories.categories.find(
      (cat: CategoriesData) => cat.categoryId === categories.selectedCategoryId,
    )?.name || ''

  return (
    <Pressable onPress={onPress}>
      <View>
        <View style={styles.badge}>
          <DonationCategoryPill title={badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header title={donationTitle} type={3} textColor={colors.black25} />
        <View style={styles.price}>
          <Header
            title={'$' + price.toFixed(2)}
            type={3}
            textColor={colors.oceanEyesBlue}
          />
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: getAdjustedWidth(155),
    height: getAdjustedHeight(170),
    borderRadius: getAdjustedHeight(20),
  },

  badge: {
    position: 'absolute',
    zIndex: 1,
    top: getAdjustedHeight(13),
    left: getAdjustedWidth(10),
  },

  donationInformation: {
    marginTop: getAdjustedHeight(16),
  },

  price: {
    marginTop: getAdjustedHeight(5),
  },
})
