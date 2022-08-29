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

const Notification = () => {
  return (
    <ScrollView>
      <View style={styleLocal.buttonWrapper}>
        <View style={{justifyContent: 'flex-start', width: 280, marginTop: 20}}>
          <Text style={styleLocal.money}>Today</Text>
        </View>
        <Contact />
        <View style={{justifyContent: 'flex-start', width: 280, marginTop: 20}}>
          <Text style={styleLocal.money}>This Week</Text>
        </View>
        <Contact />
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
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
  bigCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
});

export default Notification;
