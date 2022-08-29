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
import Icon from 'react-native-vector-icons/FontAwesome';

const ManagePhoneNumber = () => {
  return (
    <View style={styleLocal.mainWrapper}>
      <Text style={{fontSize: 17, marginBottom: 40, textAlign: 'center'}}>
        You can only delete the phone number and then you must add another phone
        number.
      </Text>
      <View style={styleLocal.menuPhone}>
        <View>
          <Text>Primary</Text>
          <Text style={styleLocal.money}>+62 813 9387 7946</Text>
        </View>
        <Icon name="trash" size={25} />
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
  menuPhone: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  money: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ManagePhoneNumber;
