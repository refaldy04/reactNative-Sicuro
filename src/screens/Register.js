import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from '../styles/global';
import Brand from '../components/Brand';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../redux/asyncActions/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const data = {
    username,
    email,
    password,
  };

  const onRegister = () => {
    console.log(data);
    dispatch(register(data));
    navigation.navigate('Login');
    // Alert.alert('Error', 'Not registered, Redirecting...', [
    //   {
    //     text: 'OKIEE',
    //     onPress: () => {
    //       navigation.navigate('Login');
    //     },
    //   },
    // ]);
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Brand />
        </View>
        <View style={styles.authMain}>
          <Text style={styleLocal.authName}>Sign Up</Text>
          <Text style={styleLocal.paragraph}>
            Create your account to access Zwallet.
          </Text>
          <View style={styleLocal.wrapper}>
            <View style={styleLocal.iconWrapper}>
              <Icon name="user" size={20} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <TextInput
                placeholder="Username"
                keyboardType="email-address"
                onChangeText={newEmail => setUsername(newEmail)}
                defaultValue={username}
              />
            </View>
          </View>
          <View style={styleLocal.wrapper}>
            <View style={styleLocal.iconWrapper}>
              <Icon name="envelope" size={20} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <TextInput
                placeholder="email"
                keyboardType="email-address"
                onChangeText={newEmail => setEmail(newEmail)}
                defaultValue={email}
              />
            </View>
          </View>
          <View style={styleLocal.wrapper}>
            <View style={styleLocal.iconWrapper}>
              <Icon name="lock" size={20} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <TextInput
                placeholder="password"
                keyboardType="email-address"
                onChangeText={newEmail => setPassword(newEmail)}
                defaultValue={password}
              />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={onRegister}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styleLocal.paragraph}>
              Already have an account? Let's Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  wrapper: {
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    width: 300,
    marginBottom: 30,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    color: 'black',
  },
  password: {
    marginTop: 30,
  },
});

export default Register;
