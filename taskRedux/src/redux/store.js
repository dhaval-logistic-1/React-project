import { configureStore } from "@reduxjs/toolkit";


import textfieldReducer from "./features/textfieldSlice.js";
import radioReducer from "./features/radioSlice.js";
import checkboxReducer from "./features/checkboxSlice.js";
import selectReducer from "./features/selectSlice.js";
import tabReducer from "./features/tabSlice.js";


const store = configureStore({
  reducer: {
    textfield: textfieldReducer,
    radio: radioReducer,
    checkbox: checkboxReducer,
    select: selectReducer,
    tab: tabReducer,
  },
});

export default store;
