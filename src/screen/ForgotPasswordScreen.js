import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import Header from '../components/Header';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';

const ForgotPasswordScreen = () => (
  <View style={styles.container}>
    {/* Lock Icon Image */}
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../images/lock.png')} style={styles.lockImage} />
    </View>

     
    <Text style={styles.title}>Forgot Password</Text>
    <View>
      
    </View>

    <CustomTextInput placeholder="Enter your email" />

    {/* Send Button */}
    <CustomButton title="Send" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    marginTop: 60,
  },
  lockImage: {
    width: 100, 
    height: 100, 
    marginBottom: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#FFCB20',
      marginBottom: 40,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    
  },
});

export default ForgotPasswordScreen;
