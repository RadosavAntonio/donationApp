import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../assets/colors'
import { DonationItem } from '../../globalComponents/donationItem'
import { getAdjustedHeight } from '../../../assets/globalUtilityFunctionsAndConstants'

export const Home = (): JSX.Element => {
  const imageUrl =
    'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.contentContainer}>
        <DonationItem
          imageUrl={imageUrl}
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <DonationItem
          imageUrl={imageUrl}
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getAdjustedHeight(24),
  },
})
