import { createSlice } from "@reduxjs/toolkit";

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState: {
    selectedOptions: [], 
  },
  reducers: {
    setcheckboxOption: (state, action) => {
      const value = action.payload;
      if (state.selectedOptions.includes(value)) {
        state.selectedOptions = state.selectedOptions.filter(
          (item) => item !== value,
        );
      } else {
        state.selectedOptions.push(value);
      }
    },
  },
});

export const { setcheckboxOption } = checkboxSlice.actions;
export default checkboxSlice.reducer;
