import { createSlice } from "@reduxjs/toolkit";

export const textfieldSlice = createSlice({
  name: "text",
  initialState: {
    value: "",
  },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = textfieldSlice.actions;

export default textfieldSlice.reducer;
