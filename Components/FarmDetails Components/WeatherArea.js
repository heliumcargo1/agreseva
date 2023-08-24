import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import axios from 'axios'

const WeatherArea = ({location}) => {
    const navigation = useNavigation()

    let lat = location.coordinates[0]
    let long = location.coordinates[1]
    console.log(lat,long)

    const getData = async () => {
      try {
          const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=58a6dcb8a20a4f679f57c568f9c63120&include=minutely`);
          
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log("response", data);
      } catch (err) {
          console.error("fetch error", err);
      }
  }
    useEffect(()=>{
      getData()
    },[])

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