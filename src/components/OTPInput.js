import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ length = 6, value, onChangeText }) => {
  const inputs = useRef([]);

  const handleTextChange = (text, index) => {
    const otpArray = value.split('');
    otpArray[index] = text;
    onChangeText(otpArray.join(''));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && !value[index]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(length)
        .fill()
        .map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
            value={value[index] || ''}
            onChangeText={(text) => handleTextChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            textAlign="center"
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    width: 50,
    height: 50,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OTPInput;
