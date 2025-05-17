import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Image source={require('../images/logo.png')} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFCB20',
  },
  image: {
    height: 54,
    width: 54,
    marginRight: 10, 
  },
});

export default Header;
