import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import CreatePin from './src/screens/CreatePin';
import SuccessCreatePin from './src/screens/SuccessCreatePin';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="SuccessCreatePin" component={SuccessCreatePin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
