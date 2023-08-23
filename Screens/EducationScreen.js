import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'

const EducationScreen = () => {
    const navigate = useNavigation()
    return (
      <View style={styles.mainContainer}>
          <GlobalHeader title={"Education"} route={"Home"} />
      </View>
  )
}

export default EducationScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:"center"
    }
})