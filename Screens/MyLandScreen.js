import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../Components/GlobalComponents/GlobalHeader'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'
import LandComponent from '../Components/Myland Screen Components/LandComponent'

export default function MyLandScreen() {
    const navigation = useNavigation()
    const [isButtonVisible, setIsButtonVisible] = useState(true);

const toggleButtonVisibility = () => {
  setIsButtonVisible(!isButtonVisible);
};
  return (
    <View style={styles.mainContainer}>
        <GlobalHeader title={"My Land"} route={"Home"} />
        <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} 
      onScroll={() => setIsButtonVisible(true)}
      scrollEventThrottle={16}
      >
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
            <LandComponent/>
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