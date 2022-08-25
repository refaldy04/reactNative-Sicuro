import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import Input from '../components/Input';
import {PRIMARY_COLOR} from '../styles/constant';

const Register = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Brand />
        </View>
        <View style={styles.authMain}>
          <Text style={styleLocal.authName}>Sign Up</Text>
          <Text style={styleLocal.paragraph}>
            Create your account to access Zwallet.
          </Text>
          <View style={styleLocal.inputWrapper}>
            <Input placeholder="Username" icon="user" />
          </View>
          <View style={styleLocal.inputWrapper}>
            <Input placeholder="Email" icon="envelope" type="email-address" />
          </View>
          <View>
            <Input placeholder="Password" icon="lock" secure={true} />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styleLocal.paragraph}>
            Already have an account? Let's Login
          </Text>
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

export default Register;
