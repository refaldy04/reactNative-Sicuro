import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Contact from '../components/Contact';

const TransferSuccess = () => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={styleLocal.circle}>
          <Icon name="check" color="#fff" size={30} />
        </View>
        <Text style={styleLocal.money}>Transfer Success</Text>
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
        <View style={{justifyContent: 'flex-start', width: 280, marginTop: 20}}>
          <Text style={styleLocal.money}>From</Text>
        </View>
        <Contact />
        <View style={{justifyContent: 'flex-start', width: 280, marginTop: 20}}>
          <Text style={styleLocal.money}>To</Text>
        </View>
        <Contact />
        <TouchableOpacity style={styleLocal.button}>
          <Text style={styleLocal.money}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  circle: {
    backgroundColor: SECONDARY_COLOR,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
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
    marginVertical: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default TransferSuccess;
