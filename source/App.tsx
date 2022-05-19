import { Provider as ProviderPaper } from 'react-native-paper'
import { Provider as ProviderRedux } from 'react-redux'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import { PersistGate } from 'redux-persist/integration/react'

import Navigations from './navigations'
import { store, persistor } from './reducers'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <ProviderRedux store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ProviderPaper>
          <LinearGradient
            style={{
              flex: 1,
            }}
            colors={['#55b390', '#6fcda8', '#88e6c0']}
          >
            <Navigations />
            <StatusBar style="auto" />
          </LinearGradient>
        </ProviderPaper>
      </PersistGate>
    </ProviderRedux>
  )
}
