import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProfile = createAsyncThunk('profile/getData', async token => {
  const result = {};
  try {
    console.log('ini dari profile', token);
    const {data} = await http(token).get('/profile');
    return data;
  } catch (e) {
    console.log('ini error dari profile');
    result.message = e.response.data?.message;
    return result;
  }
});
