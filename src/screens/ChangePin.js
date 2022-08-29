import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';

const ChangePin = () => {
  return (
    <View style={styleLocal.mainWrapper}>
      <Text style={{fontSize: 17, marginBottom: 40}}>
        Enter your current 6 digits Zwallet PIN below to continue to the next
        steps.
      </Text>
      <View style={styleLocal.pinInput}>
        <TextInput style={styleLocal.input} />
        <TextInput style={styleLocal.input} />
        <TextInput style={styleLocal.input} />
        <TextInput style={styleLocal.input} />
        <TextInput style={styleLocal.input} />
        <TextInput style={styleLocal.input} />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: SECONDARY_COLOR,
    flex: 1,
  },
  pinInput: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    marginBottom: 300,
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 40,
    borderColor: SECONDARY_COLOR,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default ChangePin;
