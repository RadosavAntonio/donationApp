import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'
import { Badge } from './badge'
import { Header } from './header'

interface Props {
  imageUrl: string
  badgeTitle: string
  donationTitle: string
  price: number
}

export const DonationItem = ({
  imageUrl,
  badgeTitle,
  donationTitle,
  price,
}: Props): JSX.Element => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image
          resizeMode={'contain'}
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
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: getAdjustedWidth(155),
    height: getAdjustedHeight(170),
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
