import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';

const OTPMobileNoScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleContinue = () => {
  //   if (/^\d{10}$/.test(mobileNumber)) {
  //     navigation.navigate('OTPVerificationScreen');
  //   } else {
  //     Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
  //   }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue With Phone</Text>
      <CustomTextInput
        placeholder="Mobile Number"
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={setMobileNumber}
        value={mobileNumber}
      />
      <CustomButton title="Continue" onPress={OTPVerificationScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFCB20',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OTPMobileNoScreen;
