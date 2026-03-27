
import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    tabValue: '',
  },
  reducers: {
    setTab: (state, action) => {
      state.tabValue = action.payload;
    }
  }
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;