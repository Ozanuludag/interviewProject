import React, {useRef, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {Context as AuthContext} from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const {state, signin, signout} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInput = useRef(null);
  let handleOnChange = (email, password) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      if (password.length > 0) {
        signin({email, password});
        navigation.navigate('Home');
      } else {
        alert('Fill in the password field!');
      }
    } else {
      alert('Email format is not correct!');
    }
  };

  const handleOnSignout = () => {
    signout();
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
  };

  if (!state.isSignedIn) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.headerBackground} />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            style={{}}>
            <View>
              <Text style={styles.header}>Login</Text>
              <Text style={styles.headerDescription}>
                Neque porro quisquam est qui dolorem
              </Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={styles.signInText}>Sign In</Text>
              <Text style={styles.signInDescription}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </Text>
              <Input
                title="Email"
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
                maxLength = {30}
                onSubmitEditing={() => {
                  passwordInput.current.focus();
                }}
              />
              <Input
                title="Password"
                value={password}
                secure={true}
                autoCapitalize="none"
                onChangeText={setPassword}
                inputRef={passwordInput}
                maxLength = {20}
              />
              <Button
                text="Sign In Now!"
                onPress={() => handleOnChange(email, password)}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Button text="Sign Out Now!" onPress={() => handleOnSignout()} />
      </View>
    );
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80,
    alignItems: 'center',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: windowHeight / 3,
    width: windowWidth,
    backgroundColor: '#1572de',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  headerDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginWrapper: {
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    width: (windowWidth * 8) / 10,
    //height: (windowHeight * 7) / 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },
  signInText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  signInDescription: {
    color: '#7e868f',
  },
});
