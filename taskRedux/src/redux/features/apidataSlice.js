import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");    
    dispatch(setUsers(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

const apidataSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setError } = apidataSlice.actions;
export default apidataSlice.reducer;
