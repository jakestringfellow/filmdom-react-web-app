import { createSlice } from "@reduxjs/toolkit";
import {
  getUsersThunk,
  loginThunk,
  registerThunk,
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "./users-thunks";

const initialState = {
  users: [],
  newUser: {},
  error: null,
  loading: false,
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    [getUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUsersThunk.rejected]: (state, action) => {
      state.error = action.error;
      state.users = [];
      state.loading = false;
    },
    [getUsersThunk.pending]: (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = null;
    },
  },
});

export default usersSlice.reducer;