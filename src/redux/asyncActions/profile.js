import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const getProfile = createAsyncThunk('profile/getData', async token => {
  const result = {};
  try {
    const {data} = await http(token).get('/profile');
    return data;
  } catch (e) {
    console.log('ini error dari profile');
    result.message = e.response.data?.message;
    return result;
  }
});

export const getProfileById = createAsyncThunk(
  'profileById/getData',
  async request => {
    const result = {};
    try {
      console.log('ini dari profile', request);
      const {data} = await http().get(`/admin/profile/${request}`);
      console.log('ini data', data);
      return data;
    } catch (e) {
      console.log('ini error dari profile');
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const historyTransaction = createAsyncThunk(
  'profile/getHistoryTransaction',
  async request => {
    const result = {};
    try {
      console.log('ini dari profile', request);
      const {data} = await http(request.token).get(
        `/historyTransaction?limit=${request.limit || 5}&page=${
          request.page || 1
        }`,
      );
      console.log('ini data history', data);
      return data;
    } catch (e) {
      console.log('ini error dari profile');
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const getAllProfile = createAsyncThunk(
  'profile/getAllData',
  async send => {
    const result = {};
    try {
      console.log(send);
      const {data} = await http(send.token).get(
        `/allProfile?search=${send.search || ''}&limit=${
          send.limit || 5
        }&page=${send.page || 1}&sort=${send.sort || 0}`,
      );
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      console.log('ini result getAllProfile kalo error', result);
      return result;
    }
  },
);
