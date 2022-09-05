import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../asyncActions/transfer';

const initialState = {
  data: {},
};

const transfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload.result;
      console.log('ini dari reducers hahahah', state.data);
    });
  },
});

export {getUsers};
export default transfer.reducer;
