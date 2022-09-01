import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import profile from './profile';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile,
});

export default rootReducer;
