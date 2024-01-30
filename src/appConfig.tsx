import { isUndefined } from 'lodash'
import env from 'react-native-config'

const throwIfNotSet = (item: any, name: string) => {
  if (isUndefined(item)) {
    throw new Error(
      `env file corrupted! ${name} not set. start check from appConfig.tsx`,
    )
  }
}

const { environment, CLERK_PUBLISHABLE_KEY } = env

throwIfNotSet(environment, 'environment')
throwIfNotSet(CLERK_PUBLISHABLE_KEY, 'CLERK_PUBLISHABLE_KEY')

const isAlpha = env.isAlpha === 'true'
const isProduction = environment === 'production'

export { CLERK_PUBLISHABLE_KEY, isAlpha, isProduction }
