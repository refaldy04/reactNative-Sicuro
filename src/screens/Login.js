import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import Input from '../components/Input';
import {PRIMARY_COLOR} from '../styles/constant';

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
      <View style={styles.authMain}>
        <Text style={styleLocal.authName}>Login</Text>
        <Text style={styleLocal.paragraph}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Email" icon="envelope" type="email-address" />
        </View>
        <View>
          <Input placeholder="Password" icon="lock" secure={true} />
        </View>
        <Text style={styleLocal.password}>Forgot password?</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styleLocal.paragraph}>
          Don't have an account? Let's Sign Up
        </Text>
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
  },
  password: {
    marginTop: 30,
  },
});

export default Login;
