import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../redux/reducers/auth';
import {useDispatch} from 'react-redux';

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styleLocal.profileWrapper}>
      <Image source={require('../asset/profile.png')} />
      <View style={styleLocal.editWrapper}>
        <Icon name="pencil" style={{marginRight: 8}} />
        <Text>Edit</Text>
      </View>
      <Text style={styleLocal.money}>Robert Chandler</Text>
      <Text>+62 813-9387-7946</Text>
      <View style={styleLocal.menuWrapper}>
        <View style={styleLocal.menuProfile}>
          <Text style={styleLocal.money}>Personal Information</Text>
          <Icon name="arrow-right" size={20} />
        </View>
        <View style={styleLocal.menuProfile}>
          <Text style={styleLocal.money}>Change Password</Text>
          <Icon name="arrow-right" size={20} />
        </View>
        <View style={styleLocal.menuProfile}>
          <Text style={styleLocal.money}>Change PIN</Text>
          <Icon name="arrow-right" size={20} />
        </View>
        <View style={styleLocal.menuProfile}>
          <Text style={styleLocal.money}>Notification</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity onPress={onLogout} style={styleLocal.menuProfile}>
          <Text style={styleLocal.money}>Logout</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default Profile;
