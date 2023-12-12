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
  errMsg: null,
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.data.balance = action.payload.balance;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.data.balance = action.payload[0]?.balance;
    });
    build.addCase(historyTransaction.fulfilled, (state, action) => {
      state.historyTransaction = action.payload?.result;
      state.historyPageInfo = action.payload?.pageInfo;
    });
    build.addCase(editPicture.fulfilled, (state, action) => {
      if (action.payload.result) {
        state.data = action.payload.result[0];
      } else {
        state.err = action.payload;
      }
    });
  },
});

export {getProfile};
export default profile.reducer;
