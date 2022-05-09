/* eslint-disable @typescript-eslint/no-namespace */
import 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native'

import DrawerProvider from '@/context/drawer-context'

import Tabs from './routes/tabs'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: undefined
      SettingsScreen: undefined
    }
  }
}

const GlobalTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

const Navigations = () => {
  return (
    <DrawerProvider>
      <NavigationContainer theme={GlobalTheme}>
        <Tabs />
      </NavigationContainer>
    </DrawerProvider>
  )
}

export default Navigations
