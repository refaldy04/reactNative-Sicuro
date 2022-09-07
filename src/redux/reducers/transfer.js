import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../asyncActions/transfer';

const initialState = {
  data: {},
  dataTransfer: {},
};

const transfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });
  },
});

export {getUsers};
export default transfer.reducer;
