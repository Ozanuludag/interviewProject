import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {state} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{fontSize: 20}}>Email: {state.email}</Text>
        <Text style={{fontSize: 20}}>Password: {state.password}</Text>
        <Text style={{fontSize: 20}}>
          {state.isSignedIn ? 'You are logged in' : 'You are not logged in'}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
