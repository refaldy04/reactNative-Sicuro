import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    console.log('from auth login', send);
    const {data} = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('ini data dari backend', data);
    console.log('ini token', result.token);
    result.token = data.result.token;
    return result;
  } catch (e) {
    console.log('gagal bro');
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/register', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
