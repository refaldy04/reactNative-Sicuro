import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileById} from '../redux/asyncActions/profile';
import {inputAmount} from '../redux/reducers/transfer';

const InputAmount = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const recipient_id = useSelector(state => state.transfer.dataTransfer);
  const recipient = useSelector(state => state.transfer.dataRecipient);

  const today = new Date();

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('ini dari input amount', recipient);
    dispatch(getProfileById(recipient_id.recipient_id));
  }, []);

  const data = {
    amount,
    notes,
    time: today,
  };

  const onInputAmount = () => {
    dispatch(inputAmount(data));
    navigation.navigate('Confirmation');
  };
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <Transaction
          name={recipient?.fullname}
          phone={recipient?.phone_number}
        />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <TextInput
          keyboardType="numeric"
          style={styleLocal.inputAmount}
          placeholder="0.0"
          onChangeText={newPassword => setAmount(newPassword)}
          defaultValue={amount}
        />
        <Text style={{marginTop: 30}}>Rp120.000 Available</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styleLocal.notesWrapper}>
          <Icon name="pencil" />
          <TextInput
            style={styleLocal.inputNotes}
            placeholder="Add some notes"
            onChangeText={newPassword => setNotes(newPassword)}
            defaultValue={notes}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onInputAmount}>
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
