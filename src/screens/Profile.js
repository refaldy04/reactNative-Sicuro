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
import {useDispatch, useSelector} from 'react-redux';
import image from '../asset/user-default.jpg';

const Profile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const profile = useSelector(state => state.profile.data);

  const dispatch = useDispatch();

  const onLogout = () => {
    console.log(profile.picture);
    // dispatch(logout());
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styleLocal.profileWrapper}>
      <Image
        source={
          profile.picture
            ? {
                uri: `https://res.cloudinary.com/dwxrkcas3/image/upload/${profile.picture}`,
              }
            : image
        }
        style={styleLocal.picture}
      />
      <View style={styleLocal.editWrapper}>
        <Icon name="pencil" style={{marginRight: 8}} />
        <Text>Edit</Text>
      </View>
      <Text style={styleLocal.money}>{profile.fullname}</Text>
      <Text>{profile.phone_number || 'phone number not set'}</Text>
      <View style={styleLocal.menuWrapper}>
        <TouchableOpacity
          style={styleLocal.menuProfile}
          onPress={() => navigation.navigate('PersonalInfo')}>
          <Text style={styleLocal.money}>Personal Information</Text>
          <Icon name="arrow-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styleLocal.menuProfile}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styleLocal.money}>Change Password</Text>
          <Icon name="arrow-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styleLocal.menuProfile}
          onPress={() => navigation.navigate('ChangePin')}>
          <Text style={styleLocal.money}>Change PIN</Text>
          <Icon name="arrow-right" size={20} />
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  picture: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginTop: 40,
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
