import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/asyncActions/transfer';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../asset/user-default.jpg';

const SearchReceiver = ({navigation}) => {
  const dispatch = useDispatch();
  const USERS = useSelector(state => state.transfer.data);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    console.log('ini data search receiver wkwkwk', USERS);
    dispatch(getUsers(token));
  }, []);
  return (
    <View style={styleLocal.flatlistContainer}>
      <View style={styleLocal.headerWrapper}>
        <View style={styleLocal.wrapper}>
          <TouchableOpacity
            style={styleLocal.iconWrapper}
            onPress={() => navigation.navigate('InputAmount')}>
            <Icon name="search" size={20} />
          </TouchableOpacity>
          <View style={styleLocal.inputWrapper}>
            <TextInput placeholder="search users" />
          </View>
        </View>
      </View>
      <View style={styleLocal.buttonWrapper}>
        <Text style={styleLocal.money}>Contacts</Text>
        <Text>17 Contact Founds</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={USERS}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => console.log(item.id)}>
              <View style={styleLocal.transactionWrapper}>
                <Image source={image} style={styleLocal.picture} />
                <View>
                  <Text>{item?.fullname}</Text>
                  <Text style={{fontSize: 12}}>lorem20</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  headerWrapper: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  picture: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  money: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    paddingLeft: 18,
    paddingTop: 18,
  },
  wrapper: {
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    width: 300,
    marginBottom: 30,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 15,
    width: 290,
    backgroundColor: '#fff',
  },
});

export default SearchReceiver;
