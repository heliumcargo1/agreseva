import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'

const SectionsOptions = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.leftContainer} onPress={()=>{
                navigation.navigate("Land")
            }}>
                <Image source={require('../../assets/icons/land.png')} style={{height:"50%",width:"50%",resizeMode:"contain"}}/>
                <Text style={styles.textStyles}>My Farm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftContainer} onPress={()=>{
                navigation.navigate("Education")}}
            >
            <Image source={require('../../assets/icons/training.png')} style={{height:"50%",width:"50%",resizeMode:"contain"}}/>

            <Text style={styles.textStyles}>Education</Text>

            </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.leftContainer} onPress={()=>{
                navigation.navigate("Market")}}>
        <Image source={require('../../assets/icons/price.png')} style={{height:"50%",width:"50%",resizeMode:"contain"}}/>

             <Text style={styles.textStyles}>Market Prices</Text>      
        </TouchableOpacity>
            <TouchableOpacity style={styles.leftContainer} onPress={()=>{
                navigation.navigate("Store")}}>
            <Image source={require('../../assets/icons/market.png')} style={{height:"50%",width:"50%",resizeMode:"contain"}}/>

            <Text style={styles.textStyles}>Agri Store</Text>

            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SectionsOptions

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(50),
        width:responsiveWidth(100),
        // backgroundColor:"grey",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    innerContainer:{
        height:responsiveHeight(20),
        width:"90%",
        // backgroundColor:"pink",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderRadius:10
    },
    leftContainer:{
        height:"90%",
        width:"45%",
        backgroundColor:colors.secondary,
        borderRadius:10,
        borderWidth:0.7,
        borderColor:"lightgreen",
        justifyContent:"center",
        alignItems:"center"
    },
    textStyles:{
        color:colors.text,
        fontSize:18,
        padding:"5%"
    }
})