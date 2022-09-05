import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';

const ChangePassword = ({navigation}) => {
  return (
    <View style={styleLocal.mainWrapper}>
      <Text style={{fontSize: 17, marginBottom: 40}}>
        You must enter your current password and then type your new password
        twice.
      </Text>
      <View style={styleLocal.inputWrapper}>
        <Input
          placeholder="Current Password"
          icon="lock"
          type="password"
          secure={true}
        />
      </View>
      <View style={styleLocal.inputWrapper}>
        <Input
          placeholder="New Password"
          icon="lock"
          type="password"
          secure={true}
        />
      </View>
      <View style={styleLocal.inputWrapper}>
        <Input
          placeholder="Repeat Password"
          icon="lock"
          type="password"
          secure={true}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => navigation.pop(1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Change Password</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: SECONDARY_COLOR,
    flex: 1,
  },
  inputWrapper: {
    marginBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: 110,
    padding: 10,
    width: 300,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ChangePassword;
