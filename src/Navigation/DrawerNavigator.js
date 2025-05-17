import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';
import AboutUs from './../screen/AboutUs';
import BlogScreen from './../screen/BlogScreen';
import ContactUs from './../screen/ContactUs';
import BusEnquiryNo from './BusEnquiryNo';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../images/profile.png')} // Replace with actual profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>I Am Tannu</Text>
        <Text style={styles.phone}>+91 12345-88889</Text>
      </View>
      <DrawerItemList {...props} />
     
    </DrawerContentScrollView>
  );
};


export default function DrawerNavigator() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerInactiveTintColor: '#000',
      drawerLabelStyle: { fontSize: 15, fontWeight: '500', },
    }}
  >
        <Drawer.Screen name="Homescreen" component={BottomNavigator} options={{ headerShown:false }} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Bus Enquiry Number" component={BusEnquiryNo} />
        <Drawer.Screen name="Blog" component={BlogScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
       
      </Drawer.Navigator>
    // {/* </NavigationContainer> */}
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#FFD700', // Yellow background
    alignItems: 'center',
    width:361,
    marginLeft:-13,
    marginTop:-12
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
 
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
