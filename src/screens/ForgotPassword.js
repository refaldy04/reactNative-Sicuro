import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import Input from '../components/Input';
import {PRIMARY_COLOR, THIRD_COLOR} from '../styles/constant';

const Login = ({navigation}) => {
  const onLogin = () => {
    Alert.alert('Please Wait', 'Redirecting...', [
      {
        text: 'OKIEE',
        onPress: () => {
          navigation.navigate('CreatePin');
        },
      },
    ]);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Brand />
      </View>
      <View style={styleLocal.authMain}>
        <View>
          <Text style={styleLocal.authName}>Reset Password</Text>
          <Text style={styleLocal.paragraph}>
            Enter your Zwallet e-mail so we can send you a password reset link.{' '}
          </Text>
          <View style={styleLocal.inputWrapper}>
            <Input placeholder="Email" icon="envelope" type="email-address" />
          </View>
        </View>
        <View style={styleLocal.buttonWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 30,
  },
  flex: {
    flex: 1,
  },
  authMain: {
    backgroundColor: THIRD_COLOR,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    color: '#ffffff',
  },
  authName: {
    fontSize: 30,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  password: {
    marginTop: 30,
  },
});

export default Login;
