import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const CustomTextInput = ({ placeholder, imageSource, secureTextEntry, keyboardType }) => (
  <View style={styles.inputContainer}>
    {/* Uncomment and use if you want to display an icon with the text input */}
    {/* <Image source={imageSource} style={styles.image} /> */}
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType} 
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 9,
    height: 50,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 13,
    color: '#ADB3C1',
  },
  image: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export default CustomTextInput;
