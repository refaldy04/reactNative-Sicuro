import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import image from '../asset/1.png';

const Transaction = ({navigation, fullname}) => {
  React.useEffect(() => {
    console.log('ini dari komponen', fullname);
  });
  return (
    <View>
      <TouchableOpacity
        style={styleLocal.transactionWrapper}
        onPress={() => navigation.navigate('Details')}>
        <View style={styleLocal.user}>
          <Image source={image} style={{marginRight: 10}} />
          <View>
            <Text>{fullname}</Text>
            <Text style={{fontSize: 12}}>Transfer</Text>
          </View>
        </View>
        <Text style={{fontSize: 20}}></Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  transactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    width: 280,
    backgroundColor: '#fff',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Transaction;
