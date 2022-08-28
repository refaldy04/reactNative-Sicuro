import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import CreatePin from './src/screens/CreatePin';
import SuccessCreatePin from './src/screens/SuccessCreatePin';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import History from './src/screens/History';
import SearchReceiver from './src/screens/SearchReceiver';
import {PRIMARY_COLOR} from './src/styles/constant';
import InputAmount from './src/screens/InputAmount';
import Confirmation from './src/screens/confirmation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Confirmation',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Confirmation"
          component={Confirmation}
        />
        <Stack.Screen
          options={{
            title: 'Transfer',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="InputAmount"
          component={InputAmount}
        />
        <Stack.Screen
          options={{
            title: 'Find Receiver',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="SearchReceiver"
          component={SearchReceiver}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="History"
          component={History}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="SuccessCreatePin" component={SuccessCreatePin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
