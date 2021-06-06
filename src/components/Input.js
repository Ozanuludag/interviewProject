import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({
  title,
  autoCapitalize,
  secure,
  inputRef,
  onSubmitEditing,
  keyboardType,
  autoCorrect,
  value,
  onChangeText,
  maxLength
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={title}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secure}
        ref={inputRef}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderRadius: 7,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 2,
    color: '#999',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    fontWeight: '600',
  },
});
