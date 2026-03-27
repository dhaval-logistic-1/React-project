import { createSlice } from "@reduxjs/toolkit";

export const radioSlice = createSlice({
  name: "option",
  initialState: {
    selectedOption: null, 
  },
  reducers: {
    setOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});


export const { setOption } = radioSlice.actions;
export default radioSlice.reducer;