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
      <View style={styleLocal.headerWrapper}>
        <Transaction />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <View>
          <View style={styleLocal.rowCard}>
            <View style={styleLocal.card}>
              <Text>Amount</Text>
              <Text style={styleLocal.money}>Rp100.000</Text>
            </View>
            <View style={styleLocal.card}>
              <Text>Balance Left</Text>
              <Text style={styleLocal.money}>Rp20.000</Text>
            </View>
          </View>
          <View style={styleLocal.rowCard}>
            <View style={styleLocal.card}>
              <Text>Date</Text>
              <Text style={styleLocal.money}>May 11, 2020</Text>
            </View>
            <View style={styleLocal.card}>
              <Text>Time</Text>
              <Text style={styleLocal.money}>12.20</Text>
            </View>
          </View>
        </View>
        <View style={styleLocal.bigCard}>
          <Text>Notes</Text>
          <Text style={styleLocal.money}>For buying some socks</Text>
        </View>
        <TouchableOpacity
          style={styleLocal.button}
          onPress={() => navigation.navigate('PinConfirmation')}>
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
    marginBottom: 10,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 145,
  },
  bigCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    marginTop: 110,
    padding: 10,
    width: 300,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Confirmation;
