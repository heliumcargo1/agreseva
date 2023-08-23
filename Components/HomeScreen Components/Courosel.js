import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'

const Courosel = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}></View>
    </View>
  )
}

export default Courosel

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(25),
        width:responsiveWidth(100),
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%"
        // backgroundColor:"red",
    },
    innerContainer:{
        height:"90%",
        width:"90%",
        backgroundColor:colors.secondary,
        borderRadius:10,
        borderWidth:0.7,
        borderColor:"lightgreen",
        justifyContent:"center",
        alignItems:"center"
    }
})