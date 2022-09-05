import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/global';
import Brand from '../components/Brand';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from '../redux/asyncActions/auth';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const data = {
    email,
    password,
  };

  const onLogin = () => {
    dispatch(login(data));
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
        <View style={styleLocal.wrapper}>
          <View style={styleLocal.iconWrapper}>
            <Icon name="lock" size={20} />
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
              placeholder="email"
              onChangeText={newPassword => setPassword(newPassword)}
              defaultValue={password}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styleLocal.password}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
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
  password: {},
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
});

export default Login;
