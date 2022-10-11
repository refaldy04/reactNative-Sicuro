import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import image from '../asset/user-default.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, historyTransaction} from '../redux/asyncActions/profile';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);
  const pin = useSelector(state => state.auth.pin);
  const profile = useSelector(state => state.profile.data);
  const data = useSelector(state => state.profile.historyTransaction);

  React.useEffect(() => {
    if (pin) {
      dispatch(getProfile(token));
      dispatch(historyTransaction({token, limit: 4}));
    } else {
      navigation.navigate('CreatePin');
    }
  }, []);
  return (
    <>
      <View style={styleLocal.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styleLocal.profileWrapper}>
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
          <View style={styleLocal.balance}>
            <Text style={{color: '#fff'}}>Balance</Text>
            <Text style={styleLocal.money}>Rp{profile?.balance}</Text>
          </View>
        </TouchableOpacity>
        <Icon name="bell" size={30} color={'#fff'} />
      </View>
      <View style={styleLocal.buttonWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchReceiver')}
          style={styleLocal.button}>
          <Icon name="arrow-up" size={18} style={{marginRight: 15}} />
          <Text style={styleLocal.money}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Topup')}
          style={styleLocal.button}>
          <Icon name="plus" size={18} style={{marginRight: 15}} />
          <Text style={styleLocal.money}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styleLocal.transaction}>
        <Text>Transaction History</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('History');
          }}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>

      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styleLocal.transactionWrapper}
              onPress={() => navigation.navigate('Details')}>
              <View style={styleLocal.user}>
                <Image source={image} style={styleLocal.picture} />
                <View>
                  <Text>{item.fullname}</Text>
                  <Text style={{fontSize: 12}}>Transfer</Text>
                </View>
              </View>
              <Text style={{fontSize: 20}}>Rp.{item.amount}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text>data not found</Text>
        </View>
      )}
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
    minHeight: 125,
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 8,
  },
  balance: {
    marginLeft: 5,
  },
  money: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  transactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // minHeight: 125,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
