import React from 'react';
import {PRIMARY_COLOR} from '../../src/styles/constant';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Register';
import CreatePin from './CreatePin';
import SuccessCreatePin from './SuccessCreatePin';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Home from './Home';
import Details from './Details';
import History from './History';
import SearchReceiver from './SearchReceiver';
import InputAmount from './InputAmount';
import Confirmation from './Confirmation';
import PinConfirmation from './PinConfirmation';
import TransferSuccess from './TransferSuccess';
import TransferFailed from './TransferFailed';
import Profile from './Profile';
import PersonalInfo from './PersonalInfo';
import ChangePassword from './ChangePassword';
import ChangePin from './ChangePin';
import AddPhoneNumber from './AddPhoneNumber';
import ManagePhoneNumber from './ManagePhoneNumber';
import Notification from './Notification';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              options={{
                title: 'Notification',
                headerStyle: {
                  backgroundColor: PRIMARY_COLOR,
                },
              }}
              name="Notification"
              component={Notification}
            />
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
          </>
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreatePin" component={CreatePin} />
            <Stack.Screen
              name="SuccessCreatePin"
              component={SuccessCreatePin}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
