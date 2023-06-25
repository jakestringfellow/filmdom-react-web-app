import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";

const initialState = {
    users: [],
    newUser: {},
    error: null,
    loading: false,
    currentUser: null,
  };

const userSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },

        [profileThunk.fulfilled]: (state, action) => { //{ payload }) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
        },

        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
        },

        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },

        [registerThunk.fulfilled]: (state, action) => {//{ payload }) => {
            state.currentUser = action.payload;
        },

        [loginThunk.fulfilled]: (state, action) => {//{ payload }) => {
            state.currentUser = action.payload;
        },
    },
});
export default userSlice.reducer;