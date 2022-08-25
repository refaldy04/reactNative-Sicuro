import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';

const Brand = () => {
  return (
    <View>
      <Text style={styleLocal.font}>Sicuro</Text>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  font: {
    fontSize: 30,
    fontWeights: '900',
    color: PRIMARY_COLOR,
  },
});

export default Brand;
