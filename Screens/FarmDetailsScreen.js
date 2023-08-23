import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import colors from '../assets/colors'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import { useNavigation } from '@react-navigation/native'
import WeatherArea from '../Components/FarmDetails Components/WeatherArea'
import FarmDetails from '../Components/FarmDetails Components/FarmDetails'
import DetechCorp from '../Components/FarmDetails Components/DetechCorp'
import {Camera, useCameraDevices} from 'react-native-vision-camera'


const FarmDetailsScreen = () => {
    const navigation = useNavigation()

    const devices = useCameraDevices()
    const camera = useRef(null)
  const device = devices.back

  const [imageData,setImageData]= useState('')
  const [takePhotoClicked,setTakePhotoClicked]=useState(false)
    useEffect(()=>{
      checkPermission()
    },[])
    const checkPermission =async ()=>{
      const newCameraPermission = await Camera.requestCameraPermission()
const newMicrophonePermission = await Camera.requestMicrophonePermission()
  console.log(newCameraPermission);
    }
    if (device == null) return <ActivityIndicator />
    const takePicture = async()=>{
      if(camera!=null ){

        const photo = await camera.current.takePhoto();
        setImageData(photo.path)
        console.log(photo.path);
      }
    }
  return (
    <View style={styles.mainContainer}>
        <GlobalHeader navigation={navigation} route={"Land"} title={"Land Details"}/>
        <WeatherArea/>
        <FarmDetails/>
        <DetechCorp/>
        
        </View>
  )
}

export default FarmDetailsScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:"center"
    }
})