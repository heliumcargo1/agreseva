import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Swiper from 'react-native-swiper';
import colors from '../../assets/colors';

const Carousel = () => {
  const [slideColors, setSlideColors] = useState([]); // State to hold random colors

  // Generate a random color
  const generateRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
  };

  // Update colors every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = Array(3).fill(null).map(generateRandomColor);
      setSlideColors(colors);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Swiper
        style={styles.swiperContainer}
        loop={true}
        autoplay={true}
        autoplayTimeout={1}
      >
        {slideColors.map((color, index) => (
          <View key={index} style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={{color:"black",fontSize:23,fontWeight:"700"}}>Ad</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  mainContainer: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft:"8%"
  },
  swiperContainer: {
    height: '90%',
    width: '90%',
  },
  innerContainer: {
    height:"90%",
    width:"90%",
    backgroundColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
