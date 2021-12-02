import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { BottomTabsNavigation } from './src/navigation/BottomTabsNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <BottomTabsNavigation />
    </SafeAreaProvider>
  )
}

export default App