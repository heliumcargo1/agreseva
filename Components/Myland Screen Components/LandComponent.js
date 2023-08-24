import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';

const LandComponent = (props) => {
  console.log(props)
  let area = props.area
  let name = props.name
  let cropName = props.cropName
  let location = props.location
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={()=>{navigation.navigate("Farm",{
      area:area,
      name:name,
      cropName:cropName,
      location:location
    })}}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/icons/farmbg.jpg')}
          style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.textStyles}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default LandComponent;

const styles = StyleSheet.create({
  mainContainer: {
    height: responsiveHeight(15),
    width: responsiveWidth(90),
    backgroundColor: colors.secondary,
    marginTop: '5%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgreen',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10, // Apply borderRadius to the image container
    overflow: 'hidden', // Clip content to the rounded corners
  },
  innerContainer: {
    height:"100%",
    width:"100%",
    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Translucent grey color
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
  },
});
