import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'

const MarketPriceScreen = () => {
  const navigate = useNavigation()
  return (
    <View style={styles.mainContainer}>
        <GlobalHeader title={"Market Price"} route={"Home"} />
    </View>
  )
}

export default MarketPriceScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.primary,
    alignItems:"center"
}
})