import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const ImageUploadComponent = () => {
  const [imageData, setImageData] = useState('');
  const [responseText, setResponseText] = useState('');

  const pickImage = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        const base64Image = response.data;
        setImageData(base64Image);
      }
    });
  };

  const uploadImage = async () => {
    try {
      const url = "https://susya.onrender.com"; // Your server URL
      const response = await axios.post(url, { image: imageData });
      console.log(response)
      setResponseText(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View>
      <Button title="Pick an Image" onPress={pickImage} />
      {imageData ? (
        <Image source={{ uri: `data:image/jpeg;base64,${imageData}` }} style={{ width: 200, height: 200 }} />
      ) : null}
      <Button title="Upload Image" onPress={uploadImage} />
      <Text>{responseText}</Text>
    </View>
  );
};

export default ImageUploadComponent;