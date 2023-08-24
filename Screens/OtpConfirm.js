import {ImageBackground, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Login = (props) => {
  let email = props.route.params.email
  const navigation = useNavigation()
  const [otp,setOtp] = useState("")
  const handleOtp = async() =>{
    try {
        // const response = await fetch("http://172.16.52.58:5000/api/otp", {
        //   email:"mustafakhan0260@gmail.com",
        //   otp,
        // });
        const response = fetch('http://172.16.52.58:5000/api/otp', {
          Method: 'POST',
          Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
          Body: {
            email,
            otp,
          },
        })
        console.log("Response",response); 
        navigation.navigate("Home")
        // Set otpSent to true after successful sign up
      } catch (error) {
        console.error("Eoor",error);
      }
}
  return (
    <ImageBackground style={{width:"100%",height:"100%"}} source={require("../assets/icons/login_bg.jpg")}>
      <View style={styles.container}>
        <View style={{
            width:"100%",
            height:"8%",
            // backgroundColor:"red",
            alignItems:'center',
            justifyContent:'center',
            bottom:20
        }}>
        <Text style={{fontSize:24,fontWeight:"900",fontFamily:"Helvetica",color:"white"}}>Welcome</Text>
        </View>
        <View style={styles.inputsContainer}>
            <TextInput  style={styles.inputStyles} placeholder='OTP' placeholderTextColor={"black"}
              onChangeText={text =>setOtp(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleOtp}>
                <Text style={{fontSize:20,color:"white",fontWeight:"700"}}>Confirm</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.signUpBtnContainer}>
            <TouchableOpacity>
                {/* <Text style={{fontSize:16,color:"white",fontWeight:"700"}}>Dont have an Account? Sign Here!</Text> */}
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(100),
    backgroundColor: '#eab67668',
    alignItems:'center',
    justifyContent:'center'
  },
  inputsContainer:{
    width:"90%",
    height:"55%",
    backgroundColor:"#ffffff63",
    alignItems:'center',
    justifyContent:'center'
  },
  signUpBtnContainer:{
    width:"90%",
    height:"10%",
    // backgroundColor:"red",
    alignItems:'center',
    justifyContent:'center'
  },
  inputStyles:{
    width: '90%',
    height: '12%',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    fontStyle: 'italic',
    color: "black",
    fontSize: 17,
    paddingLeft:20,
    marginBottom:10
  },
  button:{
    width:"70%",
    height:"15%",
    backgroundColor:"green",
    top:"10%",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
});
