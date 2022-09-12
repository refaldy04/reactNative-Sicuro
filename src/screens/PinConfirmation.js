import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import {confirmPin} from '../redux/reducers/transfer';
import {useDispatch, useSelector} from 'react-redux';
import {transfer} from '../redux/asyncActions/transfer';

const Confirmation = ({navigation}) => {
  const dataTransfer = useSelector(state => state.transfer.dataTransfer);
  const pinUser = useSelector(state => state.auth.pin);
  const token = useSelector(state => state.auth.token);
  const recipient = useSelector(state => state.transfer.dataRecipient);
  const [first, setFirst] = useState();
  const [sec, setSec] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();

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

  return (
    <View>
      <View style={styleLocal.buttonWrapper}>
        <Text style={styleLocal.money}>Enter PIN to Transfer</Text>
        <Text style={{textAlign: 'center', marginVertical: 30}}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
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
        <TouchableOpacity
          style={styleLocal.button}
          onPress={() => {
            if (pin != pinUser) {
              navigation.navigate('TransferFailed');
            } else {
              console.log('wkwkwkwkwkwk', recipient);
              const data = {
                amount: dataTransfer.amount,
                recipient_id: recipient.user_id,
                notes: dataTransfer.notes,
                time: dataTransfer.time,
                type_id: 1,
                pin: pin,
              };
              dispatch(transfer({data, token}));
              navigation.navigate('TransferSuccess');
            }
          }}>
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
