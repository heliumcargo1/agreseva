import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import colors from './assets/colors'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:"center",
    backgroundColor:colors.primary
  }
})