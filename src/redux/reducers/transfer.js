import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../asyncActions/transfer';
import {getProfileById} from '../asyncActions/profile';

const initialState = {
  data: {},
  dataTransfer: {},
  dataRecipient: {},
};

const transfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.dataTransfer.recipient_id = action.payload;
      console.log('ini dari reducers transfer', state.dataTransfer);
    },
    inputAmount: (state, action) => {
      console.log(action.payload);
      state.dataTransfer.amount = action.payload.amount;
      state.dataTransfer.notes = action.payload.notes;
      state.dataTransfer.time = action.payload.time;
      console.log('ini dari reducers transfer', state.dataTransfer);
    },
  },
  extraReducers: build => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });
    build.addCase(getProfileById.fulfilled, (state, action) => {
      state.dataRecipient = action.payload.result;
      console.log('ini data repicient', state.dataRecipient);
    });
  },
});

export {getUsers};
export const {selectUser, inputAmount} = transfer.actions;
export default transfer.reducer;
