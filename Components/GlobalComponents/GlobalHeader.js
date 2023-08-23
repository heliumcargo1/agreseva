import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'

const GlobalHeader = ({title,route}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.leftContainer} onPress={()=>{
            navigation.navigate(route)
        }} >
            <Image source={require('../../assets/icons/back.png')} style={{height:"60%",width:"60%",resizeMode:"contain"}}/>
        </TouchableOpacity>
        <View style={styles.middleContainer}>
            <Text style={styles.textStyles}>{title}</Text>
        </View>
    </View>
  )
}

export default GlobalHeader

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(7),
        width:responsiveWidth(100),
        backgroundColor:colors.secondary,
        flexDirection:"row",
        borderBottomColor:"lightgreen",
        borderBottomWidth:0.7
    },
    leftContainer:{
        height:"100%",
        width:"15%",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red"
    },
    middleContainer:{
        height:"100%",
        width:"70%",
        // backgroundColor:"pink",
        justifyContent:"center"
    },
    textStyles:{
        fontSize:18,
        color:colors.text,
        fontWeight:"700"
    }
})