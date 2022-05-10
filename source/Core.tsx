import { Provider as ProviderPaper } from 'react-native-paper'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import Navigations from './navigations'

import 'react-native-gesture-handler'

export default function App() {
  return (
    <ProviderPaper>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={['#55b390', '#6fcda8', '#88e6c0']}
      >
        
        <StatusBar style="auto" />
      </LinearGradient>
    </ProviderPaper>
  )
}
