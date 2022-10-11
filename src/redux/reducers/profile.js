import {createSlice} from '@reduxjs/toolkit';
import {
  getProfile,
  historyTransaction,
  editPicture,
} from '../asyncActions/profile';
import {topup} from '../asyncActions/topup';
import {transfer} from '../asyncActions/transfer';

const initialState = {
  data: {},
  historyTransaction: [],
  historyPageInfo: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload.result);
      state.data = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      console.log('ini dari reducers', action.payload.balance);
      state.data.balance = action.payload.balance;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      console.log('ini dari reducers', action.payload[0].balance);
      state.data.balance = action.payload[0]?.balance;
    });
    build.addCase(historyTransaction.fulfilled, (state, action) => {
      console.log('ini dari reducers detelah get history data', action.payload);
      state.historyTransaction = action.payload?.result;
      state.historyPageInfo = action.payload?.pageInfo;
    });
    build.addCase(editPicture.fulfilled, (state, action) => {
      console.log('ini dari reducers detelah edit data', action.payload.result);
      state.data = action.payload.result[0];
    });
  },
});

export {getProfile};
export default profile.reducer;
