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
import Confirmation from './src/screens/Confirmation';
import PinConfirmation from './src/screens/PinConfirmation';
import TransferSuccess from './src/screens/TransferSuccess';
import TransferFailed from './src/screens/TransferFailed';
import Profile from './src/screens/Profile';
import PersonalInfo from './src/screens/PersonalInfo';
import ChangePassword from './src/screens/ChangePassword';
import ChangePin from './src/screens/ChangePin';
import AddPhoneNumber from './src/screens/AddPhoneNumber';
import ManagePhoneNumber from './src/screens/ManagePhoneNumber';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Manage Phone Number',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="ManagePhoneNumber"
          component={ManagePhoneNumber}
        />
        <Stack.Screen
          options={{
            title: 'Add Phone Number',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="AddPhoneNumber"
          component={AddPhoneNumber}
        />
        <Stack.Screen
          options={{
            title: 'Change PIN',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="ChangePin"
          component={ChangePin}
        />
        <Stack.Screen
          options={{
            title: 'Change Password',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="ChangePassword"
          component={ChangePassword}
        />
        <Stack.Screen
          options={{
            title: 'Personal Information',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="PersonalInfo"
          component={PersonalInfo}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            title: 'Transfer Details',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="TransferFailed"
          component={TransferFailed}
        />
        <Stack.Screen
          options={{
            title: 'Transfer Details',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="TransferSuccess"
          component={TransferSuccess}
        />
        <Stack.Screen
          options={{
            title: 'Enter Your PIN',
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="PinConfirmation"
          component={PinConfirmation}
        />
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
