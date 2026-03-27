import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";


 const usersSlice = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default usersSlice;
 