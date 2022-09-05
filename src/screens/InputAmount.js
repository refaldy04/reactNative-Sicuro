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
import styles from '../styles/global';

const InputAmount = ({navigation}) => {
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <Transaction />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <TextInput
          keyboardType="numeric"
          style={styleLocal.inputAmount}
          placeholder="0.0"
        />
        <Text style={{marginTop: 30}}>Rp120.000 Available</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styleLocal.notesWrapper}>
          <Icon name="pencil" />
          <TextInput
            style={styleLocal.inputNotes}
            placeholder="Add some notes"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
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
  detailsWrapper: {
    flexDirection: 'row',
  },
  textWhite: {color: '#fff'},
  balance: {
    marginLeft: 5,
  },
  money: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  notesWrapper: {
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 30,
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 2,
    width: 200,
    marginleft: 200,
    marginBottom: 40,
  },
  inputAmount: {
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 2,
    width: 200,
    textAlign: 'center',
    fontSize: 40,
  },
  inputNotes: {},
});

export default InputAmount;
