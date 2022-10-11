import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getUsers = createAsyncThunk('users/getData', async send => {
  const result = {};

  try {
    const {data} = await http(send.token).get(
      `/allProfile?search=${send.search || ''}&limit=${send.limit || 5}&page=${
        send.page || 1
      }&sort=${send.sort || 0}`,
    );
    return data;
  } catch (e) {
    console.log('ini error dari transfer');
    result.message = e.response.data?.message;
    return result;
  }
});

export const transfer = createAsyncThunk(
  'sendMoney/transfer',
  async request => {
    const result = {};
    try {
      console.log('ini dari asyncAction', request);
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).post('/transfer', send, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      console.log('ini dari asyncActions transfer', data.result[0]);
      return data.result;
    } catch (e) {
      console.log('ini error dari async transfer', e);
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
