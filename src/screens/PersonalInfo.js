import {View, Text, Image, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PersonalInfo = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styleLocal.profileWrapper}>
      <Text>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View style={styleLocal.menuWrapper}>
        <View style={styleLocal.menuProfile}>
          <Text>First Name</Text>
          <Text style={styleLocal.money}>Robert</Text>
        </View>
        <View style={styleLocal.menuProfile}>
          <Text>Last Name</Text>
          <Text style={styleLocal.money}>Chandler</Text>
        </View>
        <View style={styleLocal.menuProfile}>
          <Text>Verified E-mail</Text>
          <Text style={styleLocal.money}>pewdiepie1@gmail.com</Text>
        </View>
        <View style={styleLocal.menuPhone}>
          <View>
            <Text>Phone Number</Text>
            <Text style={styleLocal.money}>Notification</Text>
          </View>
          <Text>Manage</Text>
        </View>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  profileWrapper: {
    paddingTop: 30,
    alignItems: 'center',
  },
  editWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  money: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuWrapper: {
    marginVertical: 20,
  },
  menuProfile: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 310,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuPhone: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default PersonalInfo;
