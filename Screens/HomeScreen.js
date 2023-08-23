import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import Courosel from '../Components/HomeScreen Components/Courosel'
import SectionsOptions from '../Components/HomeScreen Components/SectionsOptions'
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
       <GlobalHeader/>
       <Courosel/>
       <SectionsOptions/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center"
    },
})