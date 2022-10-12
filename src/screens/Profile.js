import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../redux/reducers/auth';
import {useDispatch, useSelector} from 'react-redux';
import image from '../asset/user-default.jpg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {editPicture} from '../redux/asyncActions/profile';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';

const Profile = ({navigation}) => {
  const [uploading, setUpload] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const picImage = async type => {
    const pict = type ? await launchCamera() : await launchImageLibrary();
    console.log(pict.assets[0]);
    // setUpload(false);
    // setModalVisible(!modalVisible);
    if (pict.assets) {
      setUpload(true);
      dispatch(
        editPicture({
          token,
          picture: pict.assets[0],
          cb: () => {
            setUpload(false);
            setModalVisible(!modalVisible);
          },
        }),
      );
    }
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styleLocal.profileWrapper}>
      <View style={styleLocal.picture}>
        <Image
          resizeMode="cover"
          source={
            profile.picture
              ? {
                  uri: `https://res.cloudinary.com/dwxrkcas3/image/upload/${profile.picture}`,
                }
              : image
          }
          style={styleLocal.profilePict}
        />
        {uploading && (
          <View style={styleLocal.upload}>
            <Text style={{color: 'white'}}>Loading...</Text>
          </View>
        )}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            {uploading && <Text style={{marginBottom: 20}}>Loading...</Text>}
            <Pressable
              style={[styleLocal.button, styleLocal.buttonClose]}
              onPress={() => picImage(false)}>
              <Text style={styleLocal.textStyle}>Select from galery</Text>
            </Pressable>
            <Pressable
              style={[styleLocal.button, styleLocal.buttonClose]}
              onPress={() => picImage(true)}>
              <Text style={styleLocal.textStyle}>Open camera</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styleLocal.editWrapper}>
        <Icon name="pencil" style={{marginRight: 8}} />
        <Text>Edit</Text>
      </Pressable>
      <Text style={styleLocal.money}>
        {profile.fullname || 'fullname not set'}
      </Text>
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
  profilePict: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  upload: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: SECONDARY_COLOR,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Profile;
