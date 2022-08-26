import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';

const Home = () => {
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <View style={styleLocal.profileWrapper}>
          <Image source={require('../asset/profile.png')} />
          <View style={styleLocal.balance}>
            <Text style={{color: '#fff'}}>Balance</Text>
            <Text style={styleLocal.money}>Rp120.000</Text>
          </View>
        </View>
        <Icon name="bell" size={30} color={'#fff'} />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <TouchableOpacity style={styleLocal.button}>
          <Icon name="arrow-up" size={18} style={{marginRight: 15}} />
          <Text style={styleLocal.money}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.button}>
          <Icon name="plus" size={18} style={{marginRight: 15}} />
          <Text style={styleLocal.money}>Transfer</Text>
        </TouchableOpacity>
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
  profileWrapper: {
    flexDirection: 'row',
  },
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
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Home;
