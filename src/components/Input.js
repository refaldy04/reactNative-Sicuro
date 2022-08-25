import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR} from '../styles/constant';

const Input = ({
  placeholder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={style.wrapper}>
      <View style={style.iconWrapper}>
        <Icon name={icon} size={20} color={PRIMARY_COLOR} />
      </View>
      <View style={style.inputWrapper}>
        <TextInput placeholder={placeholder} />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={style.iconWrapper}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={20}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    width: 300,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    color: 'black',
  },
});

export default Input;
