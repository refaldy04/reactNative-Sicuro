import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';
import {useDispatch, useSelector} from 'react-redux';

const Confirmation = ({navigation}) => {
  const recipient = useSelector(state => state.transfer.dataRecipient);
  const dataTransfer = useSelector(state => state.transfer.dataTransfer);
  const profile = useSelector(state => state.profile.data);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  var d = new Date();

  const time = d.getHours() + '.' + d.getMinutes();

  React.useEffect(() => {
    console.log('ini data profile', time);
  }, []);
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <Transaction name={recipient.fullname} />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <View>
          <View style={styleLocal.rowCard}>
            <View style={styleLocal.card}>
              <Text>Amount</Text>
              <Text style={styleLocal.money}>Rp{dataTransfer.amount}</Text>
            </View>
            <View style={styleLocal.card}>
              <Text>Balance Left</Text>
              <Text style={styleLocal.money}>
                Rp{profile.balance - dataTransfer.amount}
              </Text>
            </View>
          </View>
          <View style={styleLocal.rowCard}>
            <View style={styleLocal.card}>
              <Text>Date</Text>
              <Text style={styleLocal.money}>{today}</Text>
            </View>
            <View style={styleLocal.card}>
              <Text>Time</Text>
              <Text style={styleLocal.money}>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styleLocal.bigCard}>
          <Text>Notes</Text>
          <Text style={styleLocal.money}>{dataTransfer.notes}</Text>
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
