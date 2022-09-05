import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';
import {topup} from '../redux/asyncActions/topup';
import {useDispatch, useSelector} from 'react-redux';

const InputAmount = ({navigation}) => {
  const [amount, setAmount] = useState();

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const data = {
    amount,
  };

  const onTopup = () => {
    dispatch(topup({data, token}));
    navigation.navigate('Home');
  };
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <Text style={styleLocal.money}>TOPUP</Text>
      </View>
      <View style={styleLocal.buttonWrapper}>
        <TextInput
          keyboardType="numeric"
          style={styleLocal.inputAmount}
          placeholder="0.0"
          onChangeText={newAmount => setAmount(newAmount)}
        />
        <Text style={{marginTop: 20}}>Input your amount</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={onTopup}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Topup</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    minHeight: 100,
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
  inputAmount: {
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 2,
    width: 200,
    textAlign: 'center',
    fontSize: 40,
  },
});

export default InputAmount;
