import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'

const EducationScreen = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.mainContainer}>
          <GlobalHeader title={"Education"} route={"Home"} />
          <TouchableOpacity style={styles.innerContainer} onPress={()=>{
            navigation.navigate("Govt")
        }}>
            <Text style={styles.textStyles}>Govt Schemes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={()=>{
            navigation.navigate("Insurance")
        }}>
            <Text style={styles.textStyles}>Crop Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={()=>{
            navigation.navigate("Tools")
        }}>
            <Text style={styles.textStyles}>Tools and latest tech</Text>
        </TouchableOpacity>
      </View>
  )
}

export default EducationScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:"center"
    },
    innerContainer:{
        height:"15%",
        width:"90%",
        backgroundColor:colors.secondary,
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%",
        borderRadius:10,
        borderWidth:0.7,
        borderColor:"lightgreen"
    },
    textStyles:{
        color:"white",
        fontSize:22,
        fontWeight:"700"
    }
})