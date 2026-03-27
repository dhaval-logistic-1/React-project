import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
    name: "select",
    initialState: {
        selectedOption: '',
    },
    reducers: {
        setselectOption: (state , action) => {
            state.selectedOption = action.payload;
        },
    },
});

export const {setselectOption} = selectSlice.actions;
export default selectSlice.reducer;