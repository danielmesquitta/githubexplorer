import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
})

export default App
