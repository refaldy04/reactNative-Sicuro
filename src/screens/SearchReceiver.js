import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/asyncActions/transfer';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../asset/user-default.jpg';
import {selectUser} from '../redux/reducers/transfer';
import {Picker} from '@react-native-picker/picker';

const SearchReceiver = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.transfer.users);
  const pageInfo = useSelector(state => state.transfer.usersPageInfo);
  const token = useSelector(state => state.auth.token);

  const data = {
    token,
  };

  React.useEffect(() => {
    dispatch(getUsers(data));
  }, []);

  return (
    <>
      <View style={styleLocal.headerWrapper}>
        <View style={styleLocal.wrapper}>
          <TouchableOpacity
            style={styleLocal.iconWrapper}
            onPress={() => dispatch(getUsers({token, search: keyword}))}>
            <Icon name="search" size={20} />
          </TouchableOpacity>
          <View style={styleLocal.inputWrapper}>
            <TextInput
              placeholder="search users"
              onChangeText={value => setKeyword(value)}
              defaultValue={keyword}
            />
          </View>
        </View>
      </View>
      <View style={styleLocal.buttonWrapper}>
        <Text style={styleLocal.money}>Contacts</Text>
        <Text>17 Contact Founds</Text>
      </View>

      <View style={styleLocal.pagination}>
        <TouchableOpacity
          style={styleLocal.button}
          disabled={pageInfo.prevPage === null}
          onPress={() =>
            dispatch(getUsers({token, page: pageInfo.currentPage - 1}))
          }>
          <Text style={styleLocal.textWhite}>Prev</Text>
        </TouchableOpacity>

        <Text>{pageInfo.currentPage}</Text>

        <TouchableOpacity
          style={styleLocal.button}
          disabled={pageInfo.nextPage === null}
          onPress={() =>
            dispatch(getUsers({token, page: pageInfo.currentPage + 1}))
          }>
          <Text style={styleLocal.textWhite}>Next</Text>
        </TouchableOpacity>
        <Picker
          selectedValue={null}
          style={{
            width: 140,
            backgroundColor: SECONDARY_COLOR,
          }}
          onValueChange={(itemValue, itemIndex) => {
            dispatch(getUsers({token, sort: itemValue}));
          }}>
          <Picker.Item label="sort" />
          <Picker.Item label="ASC" value="0" />
          <Picker.Item label="DESC" value="1" />
        </Picker>
      </View>

      <FlatList
        data={profileData}
        renderItem={({item}) => (
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
        )}
        keyExtractor={item => item.id}
      />
    </>
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
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 6,
    borderRadius: 6,
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
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
