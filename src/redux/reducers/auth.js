import {createSlice} from '@reduxjs/toolkit';
import {login, register} from '../asyncActions/auth';

const initialState = {
  token: null,
  errorMsg: null,
  successMsg: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      //   localStorage.removeItem('token');
      return initialState;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      if (token) {
        console.log('hoy');
        state.token = token;
        // localStorage.setItem('token', token);
      } else {
        console.log('hi');
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });

    build.addCase(register.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  },
});

export {login};
export const {logout} = auth.actions;
export default auth.reducer;
