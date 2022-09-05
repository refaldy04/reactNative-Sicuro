import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import Transaction from '../components/Transaction';
import Input from '../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/asyncActions/transfer';

const Details = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.transfer.data);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    console.log('ini data search receiver wkwkwk', users);
    dispatch(getUsers(token));
  }, []);
  return (
    <View>
      <View style={styleLocal.headerWrapper}>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Email" icon="search" type="email-address" />
        </View>
      </View>
      <View style={styleLocal.buttonWrapper}>
        <Text style={styleLocal.money}>Contacts</Text>
        <Text>17 Contact Founds</Text>
      </View>
      <FlatList
        data={users}
        renderItem={data => {
          <TouchableOpacity
            style={styleLocal.transactionWrapper}
            onPress={() => navigation.navigate('Details')}>
            <View style={styleLocal.user}>
              <Image source={data.picture} style={{marginRight: 10}} />
              <View>
                <Text>{data.fullname}</Text>
                <Text style={{fontSize: 12}}>
                  Transfer Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ratione voluptatibus totam neque quo at consectetur
                  libero consequatur cumque, ipsam cum adipisci error pariatur!
                  Aperiam dolorum eum earum ipsa rem sequi eius atque in iure
                  laborum. Vel vitae unde beatae placeat cumque fugit provident
                  debitis? Eligendi, assumenda repellendus numquam corrupti
                  ipsam natus neque alias fugit commodi nemo, odio reiciendis
                  dignissimos magni doloribus, corporis optio? Harum odit quo
                  natus aut, exercitationem vitae aperiam vel enim placeat
                  aliquam eos nobis culpa tempore quas molestiae debitis
                  obcaecati quaerat id sequi magnam tempora? Distinctio
                  perferendis adipisci nobis dicta eligendi numquam placeat
                  eveniet similique nihil et dolorum laudantium molestias velit,
                  suscipit vel, est eaque eos inventore dolore. Modi voluptate
                  laborum illum distinctio incidunt, eius architecto suscipit,
                  obcaecati unde blanditiis a, necessitatibus ea. Iste
                  necessitatibus recusandae fugit voluptatem. Consequatur
                  voluptates architecto suscipit porro placeat corrupti quaerat,
                  perferendis ullam culpa! Perferendis saepe reiciendis ab nam
                  repellat fugit magni ducimus aperiam quam cum! Quibusdam,
                  magnam. Et, nemo excepturi voluptate eveniet alias ab eaque
                  nesciunt incidunt facere asperiores quisquam. Officia
                  asperiores facilis architecto consequuntur quo repellat
                  eveniet voluptatem nesciunt, rerum sed, alias voluptatum
                  minima aperiam esse deserunt provident necessitatibus laborum
                  modi perspiciatis enim veniam! Ea, aut labore? Alias,
                  consequatur quas sapiente, vitae neque similique debitis
                  recusandae aut amet dignissimos laudantium! Fugit sint sunt
                  debitis ea animi, earum quos quae exercitationem inventore
                  nisi qui nam atque natus maxime, aliquid itaque id, asperiores
                  cupiditate iste maiores ipsa molestias? Tempore quasi
                  doloremque maiores possimus, sint exercitationem esse
                  excepturi at deleniti! Tempore, sint. Quod beatae nihil
                  mollitia officiis consequuntur, architecto dolor sed id rerum
                  veniam quis asperiores nobis. Sint culpa reiciendis
                  necessitatibus fugiat odio alias omnis, quisquam, sunt neque
                  aliquam quaerat provident veritatis laborum dicta nisi.
                  Delectus voluptatibus labore iure accusamus repellendus
                  explicabo dicta velit mollitia a molestias, voluptas quisquam
                  laboriosam libero, hic accusantium!
                </Text>
              </View>
            </View>
            <Text style={{fontSize: 20}}></Text>
          </TouchableOpacity>;
        }}
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
  detailsWrapper: {
    flexDirection: 'row',
  },
  textWhite: {color: '#fff'},
  balance: {
    marginLeft: 5,
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
  diagram: {minHeight: 300},
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Details;
