import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const WeatherArea = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
    
          <Text style={styles.textStyles}>Weather</Text>
  </View>
  )
}

export default WeatherArea

const styles = StyleSheet.create({
    mainContainer: {
        height: responsiveHeight(25),
        width: responsiveWidth(90),
        backgroundColor: colors.secondary,
        marginTop: '5%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'lightgreen',
        justifyContent:"center",
        alignItems:"center"
      },
      textStyles: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
      },
})