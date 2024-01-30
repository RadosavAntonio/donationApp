import React from 'react'
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../assets/colors'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../../assets/globalUtilityFunctionsAndConstants'
import { useDispatch, useSelector } from 'react-redux'
import { UserData } from '../../store/reducers/user'
import { AppStore } from '../../store/store'
import { Header } from '../../globalComponents/header'
import { Search } from '../../globalComponents/search'
import { images } from '../../../assets/images'
import { Tab } from '../../globalComponents/tab'
import {
  Categories,
  updateSelectedCategoryId,
} from '../../store/reducers/categories'
import { isAlpha } from '../../appConfig'

export const Home = (): JSX.Element => {
  const dispatch = useDispatch()

  const user = useSelector((store: AppStore): UserData => store.user)
  const categories = useSelector(
    (store: AppStore): Categories => store.categories,
  )
  console.log('----user----', user, isAlpha)

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello, </Text>
            <View style={styles.username}>
              <Header
                title={user.firstName + ' ' + user.lastName + '. 👋'}
                textColor={colors.softBlack}
              />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.searchBox}>
          <Search />
        </View>
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            style={styles.newChanges}
            source={images.newChanges}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={styles.categoryHeader}>
          <Header
            title={'Select Category'}
            type={2}
            textColor={colors.softBlack}
          />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          data={categories.categories}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.categoryItem,
                { marginLeft: index === 0 ? getAdjustedWidth(24) : 0 },
              ]}
              key={item.categoryId}>
              <Tab
                tabId={item.categoryId}
                onPress={value => dispatch(updateSelectedCategoryId(value))}
                title={item.name}
                isDisabled={item.categoryId !== categories.selectedCategoryId}
              />
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vogueWhite,
  },

  header: {
    marginTop: getAdjustedHeight(20),
    marginHorizontal: getAdjustedWidth(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: getAdjustedWidth(16),
    lineHeight: getAdjustedWidth(19),
    fontWeight: '400',
    color: colors.veryLightGrey,
  },

  username: {
    marginTop: getAdjustedHeight(5),
  },

  profileImage: {
    width: getAdjustedWidth(50),
    height: getAdjustedHeight(50),
  },

  searchBox: {
    marginHorizontal: getAdjustedWidth(24),
    marginTop: getAdjustedHeight(20),
  },

  highlightedImageContainer: {
    marginHorizontal: getAdjustedWidth(24),
  },

  newChanges: {
    width: '100%',
    height: getAdjustedHeight(160),
  },

  categoryHeader: {
    marginHorizontal: getAdjustedWidth(24),
    marginBottom: getAdjustedHeight(16),
    marginTop: getAdjustedHeight(6),
  },

  categoryItem: {
    marginRight: getAdjustedWidth(10),
  },
})
