import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Modal from 'react-native-modal';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {
    const navigation = useNavigation()

    const [scaleValue] = useState(new Animated.Value(1));
    const [isModalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function closeModal() {
    setModalVisible(false);
  }


  return (
    <View style={styles.mainContainer}>
        <Modal
        isVisible={isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
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
          flexDirection: 'row',
        }}>
        <View style={{width:"70%",height:"100%",backgroundColor:colors.primary,borderTopRightRadius:10,alignItems:"center",borderBottomRightRadius:10,justifyContent:"space-between"}}>
            <View style={styles.userContainer}>
                <Text>Profile</Text>
            </View>
            <TouchableOpacity style={styles.userContainer}>
                <Text>Logout</Text>
            </TouchableOpacity>
          
        </View>
        <TouchableOpacity
          onPressIn={() => {
            closeModal();
          }}
          style={{
            width: '50%',
            height: '100%',
          }}></TouchableOpacity>
      </Modal>
        <TouchableOpacity style={styles.leftContainer}
            onPressIn={() => {
                toggleModal();
              }}
              hitSlop={100} >
            <Image source={require('../../assets/icons/user.png')} style={{height:"60%",width:"60%",resizeMode:"contain"}}/>
        </TouchableOpacity>
        <View style={styles.middleContainer}>
            <Text style={styles.textStyles}>Hey User</Text>
        </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(7),
        width:responsiveWidth(100),
        backgroundColor:colors.secondary,
        flexDirection:"row",
        borderBottomColor:"lightgreen",
        borderBottomWidth:0.7
    },
    leftContainer:{
        height:"100%",
        width:"15%",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red"
    },
    middleContainer:{
        height:"100%",
        width:"70%",
        // backgroundColor:"pink",
        justifyContent:"center"
    },
    textStyles:{
        fontSize:18,
        color:colors.text,
        fontWeight:"700"
    },
    userContainer:{
        height:"5%",
        width:"50%",
        marginTop:"10%",
        marginBottom:"10%",
        backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    }
})