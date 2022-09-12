import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import image from '../asset/user-default.jpg';

const Contact = ({name}) => {
  return (
    <View>
      <TouchableOpacity
        style={styleLocal.transactionWrapper}
        onPress={() => navigation.navigate('Details')}>
        <View style={styleLocal.user}>
          <Image source={image} style={styleLocal.picture} />
          <View>
            <Text>{name}</Text>
            <Text style={{fontSize: 12}}></Text>
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
    width: 300,
    backgroundColor: '#fff',
  },
  picture: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Contact;
