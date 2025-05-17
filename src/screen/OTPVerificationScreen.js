import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import OTPInput from '../components/OTPInput';
import CustomButton from '../components/Button';
import otpData from './../API/otpData';
 
const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyOTP = () => {
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      if (otp === otpData.otp) {
        Alert.alert('Success', 'OTP Verified Successfully!');
        navigation.navigate('HomeScreen'); // Navigate to next screen
      } else {
        Alert.alert('Error', 'Invalid OTP. Please try again.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
 <View style={styles.header}>
    <Text style={styles.title}>OTP Verification</Text>
  </View>
      {/* Description */}
      <Text style={styles.description}>
        We sent you an email. Please check your mail and complete the OTP code.
      </Text>

      {/* OTP Input */}
      <OTPInput value={otp} onChangeText={setOtp} />

      {/* Verify Button */}
      <CustomButton 
        title={loading ? 'Verifying...' : 'Verify OTP'} 
        onPress={handleVerifyOTP} 
        disabled={loading} 
      />
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
  description: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFCB20',
  },
});

export default OTPVerificationScreen;
