import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
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

export const getProfileById = createAsyncThunk(
  'profileById/getData',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request);
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
