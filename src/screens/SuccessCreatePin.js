import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreatePin = ({navigation}) => {
  const onSuccess = () => {
    Alert.alert('Please Wait', 'Redirecting...', [
      {
        text: 'OKIEE',
        onPress: () => {
          navigation.navigate('Home');
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
        <View style={styleLocal.success}>
          <Icon
            name={'check'}
            size={40}
            color={PRIMARY_COLOR}
            style={styleLocal.icon}
          />
        </View>
        <Text style={styleLocal.authName}>PIN Successfully Created</Text>
        <Text style={styleLocal.paragraph}>
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onSuccess}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login Now</Text>
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
  success: {
    height: 60,
    width: 60,
    borderTopLeftRadius: 60 / 2,
    borderTopRightRadius: 60 / 2,
    borderBottomLeftRadius: 60 / 2,
    borderBottomRightRadius: 60 / 2,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 25,
    paddingLeft: 9,
    paddingTop: 8,
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
  icon: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreatePin;
