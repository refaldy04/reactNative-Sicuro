import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';

const Details = () => {
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <View style={styleLocal.detailsWrapper}>
          <Icon name="arrow-down" color={'#fff'} style={{marginRight: 10}} />
          <View>
            <Text style={styleLocal.textWhite}>Income</Text>
            <Text style={styleLocal.money}>Rp2.120.000</Text>
          </View>
        </View>
        <View style={styleLocal.detailsWrapper}>
          <Icon name="arrow-up" color={'#fff'} style={{marginRight: 10}} />
          <View>
            <Text style={styleLocal.textWhite}>Expense</Text>
            <Text style={styleLocal.money}>Rp1.560.000</Text>
          </View>
        </View>
      </View>
      <View style={styleLocal.buttonWrapper}>
        <Text>In This Week</Text>
        <View style={styleLocal.diagram}></View>
      </View>
      <View style={styleLocal.transaction}>
        <Text>Transaction History</Text>
        <Text>See all</Text>
      </View>
      <Transaction />
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
    minHeight: 125,
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
    color: '#fff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 25,
  },
  diagram: {minHeight: 300},
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Details;
