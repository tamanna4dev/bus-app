import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import OTPVerificationScreen from '../screen/OTPVerificationScreen';
import OnboardingScreen from '../screen/OnboardingScreen';
import ProfileScreen from '../screen/ProfileScreen';
import BottomNavigator from './BottomNavigator';
import HomeScreen from '../screen/HomeScreen';
import NotificationScreen from './../screen/NotificationScreen';
 import LiveTraking from './../screen/LiveTraking'
import BusBookingScreen from './../screen/BusBookingScreen';
import DrawerNavigator from './DrawerNavigator';
import ViewRoute from './../screen/ViewRoute';
import BusDetails from './../screen/BusDetails';
import BusDetails2screen from './../screen/BusDetails2screen';
import BusDetails3screen from './../screen/BusDetails3screen';
import ACScreen from './../screen/ACScreen';
import BusTiming from './../screen/BusBookingScreen';
import OTPMobileNoScreen from './../screen/OTPMobileNoScreen';
import MyBusScreen from '../screen/MyBusScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen" 
      screenOptions={{ headerShown: false }} 
    >
     
      <Stack.Screen name="SplashScreen" component={SplashScreen}  />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
      <Stack.Screen name="OTPMobileNoScreen" component={OTPMobileNoScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="LiveTraking" component={LiveTraking} />
      <Stack.Screen name="BusBookingScreen" component={BusBookingScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="ViewRoute" component={ViewRoute} />
      <Stack.Screen name="BusDetails" component={BusDetails} />
      <Stack.Screen name="BusDetails2screen" component={BusDetails2screen} />
      <Stack.Screen name="BusDetails3screen" component={BusDetails3screen} />
      <Stack.Screen name="ACScreen" component={ACScreen} />
      <Stack.Screen name="BusTiming" component={BusTiming} />
      <Stack.Screen name="MyBusScreen" component={MyBusScreen} />




    </Stack.Navigator>
  );
};

export default StackNavigator;
