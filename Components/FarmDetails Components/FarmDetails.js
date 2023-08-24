import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'
import axios from 'axios'
import GetLocation from 'react-native-get-location'

const FarmDetails = (props) => {
     const [address,setAddress] = useState("")
     let name = props.name
     let area = props.area
     let cropName = props.cropName
     let location = props.location
     let mlResponse = props.mlResponse
//      let lat = location.coordinates[0]
//     let long = location.coordinates[1]
    const [latitude,setLatitude] = useState("")
    const [longitude,setLongitude] = useState("")

    const getLocation = ()=>{
     GetLocation.getCurrentPosition({
       enableHighAccuracy: true,
       timeout: 60000,
   })
   .then(location => {
       console.log(location);
       setLatitude(location.latitude)
       setLongitude(location.longitude)
       handleConvert(latitude,longitude)
   })
   .catch(error => {
       const { code, message } = error;
       console.warn(code, message);
   })
   }
     console.log(location)
     const handleConvert = async (lat,long) => {
          try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`);
            const data = response.data;
      
            if (data && data.display_name) {
              setAddress(data.display_name);
            } else {
              setAddress('Address not found');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
     //    useEffect(()=>{
     //      handleConvert()
     //    },[lat,long])
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Name</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>{name}</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Area</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>{area}</Text>
        </View>
        <View style={styles.innerContainer}>
             <Text style={styles.textStyles}>Crop</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>{cropName}</Text>
        </View>
        <TouchableOpacity style={styles.innerContainer} onPress={getLocation}>
             <Text style={[styles.textStyles,{fontSize:10}]}>Location</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={[styles.textStyles,{fontSize:9}]}>{address ? address : "Get Address"}</Text>
        </TouchableOpacity>
        <View style={[styles.innerContainer,{height:responsiveHeight(12)}]}>
             <Text style={styles.textStyles}>Crop Health</Text>
             <Text style={styles.textStyles}>:</Text>
             <Text style={styles.textStyles}>{mlResponse?.message}</Text>
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
        height:"18%",
        width:"90%",
     //    backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center",
        overflow:"hidden"
      },
      textStyles: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        padding:"2%",
        // backgroundColor:"red"
      },
})