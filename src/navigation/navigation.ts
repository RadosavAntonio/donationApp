import { DonationData } from '../store/reducers/donations'

export enum Screen {
  HOME = 'Home',
  DONATION_ITEM = 'Donation Item',
}

export type AppNavigationParams = {
  [Screen.HOME]: undefined
  [Screen.DONATION_ITEM]: DonationData
}
