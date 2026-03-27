import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(

  "users/fetchUsers",
  async ({ page, limit }) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    );
    return response.data;
  },

);

const userSlice = createSlice({

  name: "users",
  initialState: {
    users: [],
    page: 1,
    limit: 100,
    loading: false,
    error: null,
    hasMore: true,
  },

  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },

  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;

        const newUsers = action.payload;

        const uniqueUsers = newUsers.filter(
          (newUser) => !state.users.some((u) => u.id === newUser.id),
        );

        state.users = [...state.users, ...uniqueUsers];

        if (action.payload.length < state.limit) {
          state.hasMore = false;
        }

      })
      
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, nextPage } = userSlice.actions;

export default userSlice.reducer;
