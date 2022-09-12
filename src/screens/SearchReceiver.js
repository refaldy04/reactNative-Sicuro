import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';
import Input from '../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/asyncActions/transfer';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../asset/user-default.jpg';
import {selectUser} from '../redux/reducers/transfer';

const SearchReceiver = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.transfer.data);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    console.log('ini data search receiver wkwkwk', users);
    const data = dispatch(getUsers(token));
  }, []);
  return (
    <View>
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
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                dispatch(selectUser(item.id));
                navigation.navigate('InputAmount');
              }}
              style={styleLocal.transactionWrapper}>
              <View style={styleLocal.users}>
                <Image source={image} style={styleLocal.picture} />
                <View>
                  <Text>{item.fullname}</Text>
                  <Text style={{fontSize: 12}}>lorem20</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
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
  transactionWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  users: {
    flexDirection: 'row',
  },
  detailsWrapper: {
    flexDirection: 'row',
  },
  textWhite: {color: '#fff'},
  balance: {
    marginLeft: 5,
  },
  picture: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 10,
    marginRight: 20,
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
  inputWrapper: {
    flex: 1,
    color: 'black',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default SearchReceiver;
