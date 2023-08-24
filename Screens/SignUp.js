import {ImageBackground, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { responsiveHeight } from 'react-native-responsive-dimensions';


const Login = () => {
    const navigation = useNavigation()
    const [username,setUserName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleSignup = async() =>{
        try {
            const response = await axios.post("http://172.16.52.58:5000/api/signup", {
              username:username,
              email:email,
              password:password,
            });
            console.log("Response",response); 
            navigation.navigate("OtpConfirm",{email:email})
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
            <TextInput  style={styles.inputStyles} placeholder='Name' placeholderTextColor={"black"}
                value={username}
                onChangeText={text => setUserName(text)}
            />
            <TextInput  style={styles.inputStyles} placeholder='Email' placeholderTextColor={"black"}
                value={email}
                onChangeText={text=>setEmail(text)}
            />
            <TextInput  style={styles.inputStyles} placeholder='Password' placeholderTextColor={"black"}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={{fontSize:20,color:"white",fontWeight:"700"}}>Get OTP</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.signUpBtnContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={{fontSize:16,color:"white",fontWeight:"700"}}>Already have an Account? Log In Here!</Text>
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
