import { StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import {responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import axios from 'axios'
import Modal from 'react-native-modal'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../assets/colors'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import GetLocation from 'react-native-get-location'
import { useNavigation } from '@react-navigation/native';




const AddLand = () => {
    const navigation = useNavigation()
    const [modal,setModal] = useState(false)
    const [landName,setLandAName] = useState()
    const [area,setArea] = useState()
    const [cropName,setCropName] = useState("")
    // let cropName = "test crop"
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const getLocation = ()=>{
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
      })
      .then(location => {
          console.log(location);
          setLatitude(location.latitude)
          setLongitude(location.longitude)
      })
      .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
      })
      }
    const addLand = async ()=>{
        console.log(landName, area, cropName, latitude,longitude)
        try{
            const response = await axios.post("http://172.16.52.58:3000/land/create",{
            name:landName,
            area,
            cropName,
            location:{
                type:"Point",
                coordinates:[latitude,longitude]
            }
        })
        console.log("Response",response); 
        navigation.navigate("Land")
        }catch(err){
            console.log("Error storing land: ",err)
        }
    }
    // const addLand = async () => {
    //     console.log(landName, area, cropName, latitude, longitude);
    //     try {
    //         const response = await fetch("http://172.16.52.58:3000/land/create", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 name: landName,
    //                 area,
    //                 cropName,
    //                 location: {
    //                     type: "Point",
    //                     coordinates: [latitude, longitude]
    //                 }
    //             })
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    
    //         const data = await response.json();
    //         console.log("Response", data);
    //     } catch (err) {
    //         console.error("Error storing land: ", err);
    //     }
    // }
    
    const toggleModal = () =>{
        setModal(!modal)
    }
    const storeCropName = (arg)=>{
        setCropName(arg)
        setModal(false)
    }
  return (
    <>
    <GlobalHeader title={"Add Farm"} route={"Land"}/>
    <View style={styles.mainContainer}>
      {/* Modal */}

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
          margin: 0,
          width: '100%',
          height:responsiveHeight(100),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          // backgroundColor:"grey"
        }}>
        <TouchableOpacity
          style={{width: '100%', height: responsiveHeight(10)}}
          onPress={() => toggleModal()}></TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(90),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <View style={{width:"95%",height:"10%",backgroundColor:"white",borderRadius:15}}>
          <TouchableOpacity style={{width:"100%",height:"100%",alignItems:'center',}} onPress={()=>togglePercentageModal()}>
        <Text style={{fontSize:20,color:"#000"}}>X</Text> 
        </TouchableOpacity>
        
          </View> */}
          <View
            style={{
              width: '95%',
              height: responsiveHeight(80),
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <KeyboardAwareScrollView contentContainerStyle={{height:responsiveHeight(280),width:"100%",alignItems:'center'}}>
            <TouchableOpacity style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}
            onPress={()=>{storeCropName("bajra")}}
            >
                <Image source={require("../assets/icons/bajra.jpg")} 
                style={{
                    width:"100%",height:"90%",
                    }} />
            </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{storeCropName("cotton")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}>
                <Image source={require("../assets/icons/cotton_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{storeCropName("maize")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}>
                <Image source={require("../assets/icons/maize_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{storeCropName("Moong")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}>
                <Image source={require("../assets/icons/mung_bean_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{storeCropName("peanut")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}>
                <Image source={require("../assets/icons/peanut_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{storeCropName("pigeon_pea")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/pigeon_pea_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{storeCropName("ragi")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/ragi_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{storeCropName("rice")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/rice_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{storeCropName("sorghum")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/sorghum_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{storeCropName("soybean")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/soybean_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{storeCropName("urad")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}><Image source={require("../assets/icons/urad_crop.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} /></TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{storeCropName("sugarcane")}}
                style={{height:responsiveHeight(20),width:responsiveWidth(90),bgcmarginTop:"5%",justifyContent:'center'}}>
                <Image source={require("../assets/icons/sugarcane.jpg")} 
                style={{
                    width:"100%",height:"90%"
                    }} />
                </TouchableOpacity>
            </KeyboardAwareScrollView>
            
          </View>
        </View>
      </Modal>

      {/* Modal */}
        <View style={styles.innerContainer2}>
            <View style={styles.textContainer}>
                <TextInput 
                placeholder='Enter Name'
                style={styles.inputStyles}
                value={landName}
                    onChangeText={text => setLandAName(text)}
                />
            </View>
            <View style={styles.textContainer}>
                <TextInput 
                                placeholder='Enter Area in Acres'
                                keyboardType="decimal-pad"
                                style={styles.inputStyles}
                                value={area}
                onChangeText={text => setArea(text)}
                />
            </View>
            <View style={[styles.textContainer,{justifyContent:"space-between"}]}>
                <Text style={styles.textStyles1}>{ cropName? cropName:"Crop"}</Text>
                <TouchableOpacity style={[styles.dropDownContainer,]}
                    onPress={toggleModal}
                >
                                        <Image source={require('../assets/icons/down.png')} style={{height:"70%",width:"70%",resizeMode:"contain"}}/>

                </TouchableOpacity>
            </View>
            {/* <View style={[styles.textContainer,{justifyContent:"space-between"}]}>
                <Text style={styles.textStyles1}>Get Location</Text>
        
                <TouchableOpacity style={[styles.dropDownContainer,]} onPress={()=>{
                    getLocation()
                }}>
                    <Image source={require('../assets/icons/down.png')} style={{height:"70%",width:"70%",resizeMode:"contain"}}/>
                </TouchableOpacity>
            </View> */}
            
        </View>
        <TouchableOpacity style={styles.innerContainer3} onPress={addLand}>
            <Text style={styles.textStyles}>Submit</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default AddLand

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        backgroundColor:colors.primary,
        alignItems:"center"
    },
    innerContainer2:{
        height:"60%",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:colors.primary
    },
    textContainer:{
        height:"10%",
        width:"90%",
        backgroundColor:colors.secondary,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
    },
    innerContainer3:{
        height:"8%",
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.profit,
        borderRadius:10
    },
    dropDownContainer:{
        height:"100%",
        width:"40%",
        borderRadius:10,
        // borderColor:"lightgreen",
        // borderWidth:0.5,
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:"blue"
    },
    textStyles:{
        fontSize:20,
        color:"black",
        fontWeight:"700"
    },
    
        inputStyles: {
            width: '100%',
            height: '100%',
            color: colors.text,
            fontSize: 17,
            paddingLeft:20
          },
    
        textStyles1:{
            color: colors.text,
            fontSize: 17,
            paddingLeft:20
        }
})