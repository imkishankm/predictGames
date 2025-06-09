import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../utils/colors';

const CustomButton = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    backgroundColor: COLORS.primary,
    justifyContent:'center',
    alignItems:'center',
    marginTop:16
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 16,
  },
});
