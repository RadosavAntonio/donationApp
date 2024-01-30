import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { AppNavigationParams, Screen } from '../../navigation/navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackButton } from '../../globalComponents/backButton'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../../assets/colors'
import { Header } from '../../globalComponents/header'
import { DonationCategoryPill } from '../../globalComponents/donationCategoryPill'

type Props = StackScreenProps<AppNavigationParams, Screen.DONATION_ITEM>

export const DonationItemScreen = ({ route, navigation }: Props) => {
  const { name, description, image, donationItemId, price } = route.params
  return (
    <SafeAreaView style={styles.safeAreaContainer} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{ uri: image }} style={styles.image} />
        <Header type={1} title={name} textColor={colors.softBlack} />
        <Text style={styles.description}>{`Item code: ${donationItemId}`}</Text>
        <Text style={styles.description}>{`Price ${price}`}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.badge}>
          <DonationCategoryPill title={name} pillWidth={100} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button title={'Donate'} onPress={() => Alert.alert('Coming soon!')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },

  container: {
    marginHorizontal: getAdjustedWidth(20),
    marginTop: getAdjustedHeight(7),
  },

  image: {
    marginTop: getAdjustedHeight(12),
    marginBottom: getAdjustedHeight(24),
    width: '100%',
    height: getAdjustedHeight(240),
    borderRadius: getAdjustedHeight(8),
  },

  badge: {
    marginBottom: getAdjustedHeight(16),
  },

  description: {
    marginTop: getAdjustedHeight(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: getAdjustedWidth(14),
    marginBottom: getAdjustedHeight(10),
  },

  button: {
    marginHorizontal: getAdjustedHeight(20),
  },
})
