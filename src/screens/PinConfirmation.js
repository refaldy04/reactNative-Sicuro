import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';
import Input from '../components/Input';

const Confirmation = ({navigation}) => {
  return (
    <View>
      <View style={styleLocal.buttonWrapper}>
        <Text style={styleLocal.money}>Enter PIN to Transfer</Text>
        <Text style={{textAlign: 'center', marginVertical: 30}}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.{' '}
        </Text>
        <View style={styleLocal.pinInput}>
          <TextInput style={styleLocal.input} />
          <TextInput style={styleLocal.input} />
          <TextInput style={styleLocal.input} />
          <TextInput style={styleLocal.input} />
          <TextInput style={styleLocal.input} />
          <TextInput style={styleLocal.input} />
        </View>
        <TouchableOpacity
          style={styleLocal.button}
          onPress={() => navigation.navigate('TransferSuccess')}>
          <Text style={styleLocal.money}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  headerWrapper: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    minHeight: 100,
  },
  textWhite: {color: '#fff'},
  money: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pinInput: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 40,
    borderColor: SECONDARY_COLOR,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    marginTop: 110,
    padding: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Confirmation;
