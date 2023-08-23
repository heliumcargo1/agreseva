import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'

const FarmDetails = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Name</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>Name</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Size</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>Size</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Crop</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>Crop</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Location</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>Location</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Crop Health</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>Crop Health</Text>
        </View>
</View>
  )
}

export default FarmDetails

const styles = StyleSheet.create({
    mainContainer: {
        height: responsiveHeight(35),
        width: responsiveWidth(90),
        backgroundColor: colors.secondary,
        marginTop: '5%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'lightgreen',
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      innerContainer:{
        height:"15%",
        width:"90%",
        // backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center"
      },
      textStyles: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        padding:"2%",
        // backgroundColor:"red"
      },
})