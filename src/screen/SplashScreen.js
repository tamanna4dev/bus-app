import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');  // 2 seconds ke baad LoginScreen pe navigate hoga
    }, 2000);

    return () => clearTimeout(timer); // Timer ko clear karenge agar component unmount ho
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Splash.png')}  // Path to your splash image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>BUSWAY</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200, // Adjust logo size
    height: 200, // Adjust logo size
    marginBottom: 20, // Space between logo and button
  },
  buttonText: {
    color: '#FFCB20',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
