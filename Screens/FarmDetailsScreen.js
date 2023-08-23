import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import colors from '../assets/colors'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import { useNavigation } from '@react-navigation/native'
import WeatherArea from '../Components/FarmDetails Components/WeatherArea'
import FarmDetails from '../Components/FarmDetails Components/FarmDetails'
import DetechCorp from '../Components/FarmDetails Components/DetechCorp'
import {Camera, useCameraDevices} from 'react-native-vision-camera'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Modal from 'react-native-modal';
import { base64 } from 'base64-js';


// import RNFS from 'react-native-fs';


const FarmDetailsScreen = () => {
    const navigation = useNavigation()
  	const [modal,setModal] = useState(false)
    const devices = useCameraDevices()
    const camera = useRef(null)
  const device = devices.back
  const [camphoto,setPhoto] = useState()

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
        setModal(true)
        setTakePhotoClicked(false)
        console.log(photo.path);
        setPhoto(photo)
        var data = new FormData();
        data.append('my_photo', {
          uri: photo.path, // your file path string
          name: 'my_photo.jpg',
          type: 'image/png'
        })
        console.log("Image: ",data._parts)
        console.log("Paaath: ",photo.path)
    
        
      }
    }
    function closeModal() {
      setModal(false);
    }
    

    const fetchData = async () => {
      console.log("calling ML")
      try {
        const imageUri = camphoto.path; // Update with the actual path
        const response = await fetch(imageUri);
        const imageBlob = await response.blob();

        const reader = new FileReader();
        reader.onload = async () => {
          const imgDataArrayBuffer =  reader.result;
          const imgDataUint8Array =   new Uint8Array(imgDataArrayBuffer);

          const imgBase64 = base64.fromByteArray(imgDataUint8Array);

          const url = 'https://susya.onrender.com';
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imgBase64 }),
          };

          const r = await fetch(url, requestOptions);
          const responseText = await r.text();

          console.log("rrrrrrrrrr",responseText.trim());
        };

        reader.readAsArrayBuffer(imageBlob);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <View style={styles.mainContainer}>
      <Modal
        isVisible={modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        animationInTiming={180}
        animationOutTiming={180}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        style={{
          width:"100%",
          flexDirection:"row",
        }}>
        <View style={{width:"90%",height:"100%",backgroundColor:colors.primary,borderRadius:10,alignItems:"center",justifyContent:"space-evenly",marginLeft:"40%"}}>
           
                    {imageData !== '' && <Image source={{uri:'file://'+imageData}} style={{width:"90%",height:"80%"}}/>}
                    <TouchableOpacity style={{height:"8%",width:"40%",backgroundColor:colors.profit,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{color:"black",fontSize:18,fontWeight:"700"}} onPress={()=>{
                        closeModal(),
                        fetchData()
                      }}>Submit</Text>
                    </TouchableOpacity>

        </View>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '100%',
          }}></TouchableOpacity>
      </Modal>
       {takePhotoClicked ?(
        <View style={{flex:1}}>
        <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} ref={camera } photo/>
        <TouchableOpacity style={{width:60,height:60,borderRadius:50,backgroundColor:"white",position:"absolute",alignSelf:"center",bottom:50}} onPress={()=>{
          takePicture()
        }}>
        </TouchableOpacity>
        </View>
       ):(
        <View style={{flex:1,alignItems:"center"}}>
          {/* {imageData !== '' && <Image source={{uri:'file://'+imageData}} style={{width:"90%",height:200}}/>} */}
          {/* <TouchableOpacity style={{width:"90%",height:50,borderWidth:1,alignSelf:"center"}} 
          onPress={()=>{
            setTakePhotoClicked(true)
          }}></TouchableOpacity> */}
          <GlobalHeader navigation={navigation} route={"Land"} title={"Land Details"}/>
<WeatherArea />
<FarmDetails/>
<DetechCorp setTakePhotoClicked={setTakePhotoClicked}/> 
        </View>
       )}
       
        
    </View>
  )
}

export default FarmDetailsScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        // alignItems:"center"
    }
})
