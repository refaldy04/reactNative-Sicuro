import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getUsers = createAsyncThunk('users/getData', async token => {
  const result = {};
  try {
    const {data} = await http(token).get('/allProfile');
    console.log('ini dari transfer:data', data);
    return data;
  } catch (e) {
    console.log('ini error dari transfer');
    result.message = e.response.data?.message;
    return result;
  }
});
