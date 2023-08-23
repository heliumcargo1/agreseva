import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect ,useState,useRef} from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'
import {Camera, useCameraDevices} from 'react-native-vision-camera'
import { useNavigation } from '@react-navigation/native'

const DetechCorp = () => {
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
    <TouchableOpacity style={styles.mainContainer} onPress={()=>{
      checkPermission()
    }}>
      <Text style={styles.textStyles}>DetechCorp</Text>
      <Camera ref={camera} style={StyleSheet.absoluteFill} device={device} isActive={true} photo/>
        <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:"white",position:"absolute",bottom:50,alignSelf:"center"}} onPress={()=>{
          takePicture()
        }}></TouchableOpacity>
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