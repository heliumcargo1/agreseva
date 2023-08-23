import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'

const DetechCorp = ({setTakePhotoClicked}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={()=>setTakePhotoClicked(true)}>
      <Text style={styles.textStyles}>Detect Crop</Text>
    </TouchableOpacity>
  )
}

export default DetechCorp

const styles = StyleSheet.create({
  mainContainer:{
    height:responsiveHeight(8),
    width:responsiveWidth(90),
    backgroundColor:colors.profit,
    marginTop:"8%",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  textStyles:{
    fontSize:18,
    color:"white",
    fontWeight:"700"
  }
})