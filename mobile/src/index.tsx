import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes'
import { colors } from './styles/variables'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App
