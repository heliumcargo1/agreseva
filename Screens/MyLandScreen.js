import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'
import LandComponent from '../Components/Myland Screen Components/LandComponent'
import axios from 'axios'

export default function MyLandScreen() {
  const [lands,setLands] = useState([])
    const navigation = useNavigation()
    const [isButtonVisible, setIsButtonVisible] = useState(true);

const toggleButtonVisibility = () => {
  setIsButtonVisible(!isButtonVisible);
};
    const getData = async ()=>{
      try{
        const response = await axios.get("http://172.16.52.58:3000/land/all")
        console.log(response.data)
        setLands(response.data)
      }catch(err){
        console.error("Fetching Error",err)
      }
    }
    useEffect(()=>{
      getData()
    },[])

  return (
    <View style={styles.mainContainer}>
        <GlobalHeader title={"My Farm"} route={"Home"} />
        <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} 
      onScroll={() => setIsButtonVisible(true)}
      scrollEventThrottle={16}
      >
            {lands.map((i)=>(
              <LandComponent name={i.name} area={i.area} cropName={i.cropName} location={i.location}/>
            ))}
         
        </ScrollView>
        {isButtonVisible && (
            
            <TouchableOpacity style={styles.button} 
            onPress={()=>{
                toggleButtonVisibility(),navigation.navigate("Add")
            }}
            >
            <View style={{height:50,width:50,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:colors.profit}}>
    
              <Text style={styles.buttonText}>+</Text>
            </View>
            </TouchableOpacity>
          )}
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:"center"
    },
    button: {
        position: 'absolute',
        top: "90%",
        right: "10%",
        backgroundColor: 'blue',
        borderRadius: 50,
        height:50,
        width:50,
        justifyContent:"center",
        alignItems:"center"
      },
      buttonText: {
        color: 'white',
        fontSize:30,
      },
})