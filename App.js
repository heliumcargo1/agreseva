import { StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import EducationScreen from './Screens/EducationScreen';
import MyLandScreen from './Screens/MyLandScreen';
import MarketPriceScreen from './Screens/MarketPriceScreen';
import AgriStoreScreen from './Screens/AgriStoreScreen';
import FarmDetailsScreen from './Screens/FarmDetailsScreen';
import CameraScreen from './Screens/CameraScreen';
import AddLand from './Screens/AddLand';
import Govt from './Components/Govt';
import CorpInsurance from './Components/CorpInsurance';
import ToolsTech from './Components/ToolsTech';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import OtpConfirm from './Screens/OtpConfirm';
// import ImageUploadComponent from './Screens/ImageUploadComponent';

// import {UserContext} from './Main';

const Stack = createNativeStackNavigator();
// export const UserContext = React.createContext();
const App = () => {


  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />  
          <Stack.Screen name="OtpConfirm" component={OtpConfirm} />  
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Land" component={MyLandScreen} />
          <Stack.Screen name="Education" component={EducationScreen} />
          <Stack.Screen name="Market" component={MarketPriceScreen} />
          <Stack.Screen name="Store" component={AgriStoreScreen} />
          <Stack.Screen name="Farm" component={FarmDetailsScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Add" component={AddLand} />
          
      <Stack.Screen name="Govt" component={Govt} />
      <Stack.Screen name="Insurance" component={CorpInsurance} />
      <Stack.Screen name="Tools" component={ToolsTech} />
          {/* <Stack.Screen name="Test" component={ImageUploadComponent} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      // <ImageUploadComponent />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
