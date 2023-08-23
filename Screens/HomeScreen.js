import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Courosel from '../Components/HomeScreen Components/Courosel'
import SectionsOptions from '../Components/HomeScreen Components/SectionsOptions'
import colors from '../assets/colors'
import HomeHeader from '../Components/HomeScreen Components/HomeHeader'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
       <HomeHeader/>
       <Courosel/>
       <SectionsOptions/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center",
        backgroundColor:colors.primary
    },
})