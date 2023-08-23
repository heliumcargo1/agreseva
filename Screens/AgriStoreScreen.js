import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'

const AgriStoreScreen = () => {
 
    const navigate = useNavigation()
    return (
      <View style={styles.mainContainer}>
          <GlobalHeader title={"Agri Store"} route={"Home"} />
      </View>
  )
}

export default AgriStoreScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:"center"
    }
})