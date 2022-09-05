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
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import {createPin} from '../redux/asyncActions/auth';
import {useDispatch, useSelector} from 'react-redux';

const CreatePin = ({navigation}) => {
  const [first, setFirst] = useState();
  const [sec, setSec] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();

  const email = useSelector(state => state.auth.email);

  const dispatch = useDispatch();

  const data = {
    first,
    sec,
    third,
    fourth,
    fifth,
    sixth,
  };

  const pin = Object.values(data).join('');

  const formPin = {
    pin,
    email,
  };

  const onCreatePin = () => {
    dispatch(createPin(formPin));
    navigation.navigate('SuccessCreatePin');

    // Alert.alert('Please Wait', 'Redirecting...', [
    //   {
    //     text: 'OKIEE',
    //     onPress: () => {
    //
    //     },
    //   },
    // ]);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Brand />
      </View>
      <View style={styles.authMain}>
        <Text style={styleLocal.authName}>Create Security PIN</Text>
        <Text style={styleLocal.paragraph}>
          Create a PIN that's contain 6 digits number for security purpose in
          Zwallet.
        </Text>

        <View style={styleLocal.pinInput}>
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setFirst(newPassword)}
            defaultValue={first}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setSec(newPassword)}
            defaultValue={sec}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setThird(newPassword)}
            defaultValue={third}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setFourth(newPassword)}
            defaultValue={fourth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setFifth(newPassword)}
            defaultValue={fifth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newPassword => setSixth(newPassword)}
            defaultValue={sixth}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onCreatePin}>
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
  pinInput: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 40,
    borderColor: SECONDARY_COLOR,
    borderRadius: 10,
    textAlign: 'center',
  },
  password: {
    marginTop: 30,
  },
});

export default CreatePin;
