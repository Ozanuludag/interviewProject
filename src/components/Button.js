import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0065e0',
    margin: 10,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: '90%',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f1f1f1',
  },
});
