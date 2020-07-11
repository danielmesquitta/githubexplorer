import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Dashboard from './pages/Dashboard'
import Repository from './pages/Repository'
import { colors } from './styles/variables'
import Header from './components/Header'

type RootStackParamList = {
  Dashboard: undefined
  Repository: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.header,
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: () => <Header />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Repository" component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
