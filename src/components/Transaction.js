import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import image from '../asset/1.png';

const Transaction = () => {
  return (
    <View>
      <View style={styleLocal.transactionWrapper}>
        <View style={styleLocal.user}>
          <Image source={image} style={{marginRight: 10}} />
          <View>
            <Text>Samuel Suhi</Text>
            <Text style={{fontSize: 12}}>Transfer</Text>
          </View>
        </View>
        <Text style={{fontSize: 20}}>+Rp50.000</Text>
      </View>
      <View></View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  transactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    minHeight: 125,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Transaction;
