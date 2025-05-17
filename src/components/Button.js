import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, isSecondary }) => (
  <TouchableOpacity
    style={[styles.button, isSecondary && styles.secondaryButton]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, isSecondary && styles.secondaryText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F6B800',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F6B800',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#F6B800',
  },
});

export default CustomButton;
