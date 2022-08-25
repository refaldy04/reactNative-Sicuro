import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import Input from '../components/Input';
import {PRIMARY_COLOR} from '../styles/constant';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Brand />
      </View>
      <View style={styles.authMain}>
        <Text style={styleLocal.authName}>Create Security PIN</Text>
        <Text style={styleLocal.paragraph}>
          Create a PIN that’s contain 6 digits number for security purpose in
          Zwallet.
        </Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
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
