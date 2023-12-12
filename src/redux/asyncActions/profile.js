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
      const {data} = await http().get(`/admin/profile/${request}`);
      return data;
    } catch (e) {
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
      const {data} = await http(request.token).get(
        `/historyTransaction?limit=${request.limit || 5}&page=${
          request.page || 1
        }`,
      );
      return data;
    } catch (e) {
      console.log('ini error dari profile', e);
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

export const editPicture = createAsyncThunk(
  'editProfileById/patchPicture',
  async request => {
    const result = {};
    try {
      var formData = new FormData();
      formData.append('picture', {
        uri: request.picture.uri,
        name: request.picture.fileName,
        type: request.picture.type,
      });
      const {data} = await http(request.token).patch(`/profile/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      request.cb();
      return data;
    } catch (e) {
      console.log('ini error dari profile', e);
      request.cb();
      return e.response.data?.message;
    }
  },
);
