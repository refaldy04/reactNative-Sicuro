import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../asyncActions/transfer';
import {getProfileById} from '../asyncActions/profile';

const initialState = {
  data: {},
  users: [],
  usersPageInfo: {},
  dataTransfer: {},
  dataRecipient: {},
};

const transfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      console.log('ini action payload transfer', action.payload);
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
    confirmPin: (state, action) => {
      console.log('ini data repicient', action);
      state.dataTransfer.pin = action.payload;
      console.log('ini dari reducers transfer', state.dataTransfer);
    },
  },
  extraReducers: build => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      const users = action.payload?.result;
      const pageInfo = action.payload?.pageInfo;
      if (users) {
        state.users = users;
        state.usersPageInfo = pageInfo;
      }
    });
    build.addCase(getProfileById.fulfilled, (state, action) => {
      state.dataRecipient = action.payload.result;
      console.log('ini data repicient', state.dataRecipient);
    });
  },
});

export {getUsers};
export const {selectUser, inputAmount, confirmPin} = transfer.actions;
export default transfer.reducer;
