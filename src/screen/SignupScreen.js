import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';
// import api from './../API/api';  


const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignup = async () => {
    const { firstName, lastName, email, mobileNumber, password, confirmPassword, dateOfBirth } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !mobileNumber || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await api.post('/users', {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        dateOfBirth,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('OnboardingScreen');
      } else {
        Alert.alert('Error', 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      
      {/* Input Fields */}
      <CustomTextInput
        icon="person-outline"
        placeholder="First Name"
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <CustomTextInput
        icon="person-outline"
        placeholder="Last Name"
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <CustomTextInput
        icon="mail-outline"
        placeholder="Email address"
        onChangeText={(text) => handleChange('email', text)}
      />
      <CustomTextInput
        icon="call-outline"
        placeholder="Mobile Number"
        onChangeText={(text) => handleChange('mobileNumber', text)}
      />
      <CustomTextInput
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
      />
      <CustomTextInput
        icon="lock-closed-outline"
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />
      <CustomTextInput
        icon="calendar-outline"
        placeholder="Date of Birth"
        onChangeText={(text) => handleChange('dateOfBirth', text)}
      />

      {/* Signup Button */}
      <CustomButton title="Signup" onPress={handleSignup} />

      {/* Footer with Login Link */}
      <TouchableOpacity style={styles.Footercontainer} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.text}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffc107',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#6c757d',
  },
  link: {
    color: '#ffc107',
    fontWeight: 'bold',
  },
  Footercontainer: {
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default SignupScreen;
