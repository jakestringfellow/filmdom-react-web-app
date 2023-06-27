import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const getUsersThunk = createAsyncThunk("users/getUsers", async () => {
    const users = await authService.getUsers();
    return users;
  });

export const loginThunk = createAsyncThunk(
    "users/login", async (user) => { //(username, password) => {
        const currentUser = await authService.login(user);//(username, password);
        return currentUser;
    });

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
        const currentUser = await authService.profile();
        return currentUser;
    }
);

export const logoutThunk = createAsyncThunk(
    "users/logout", async () => {
        return await authService.logout();
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "users/register", async (user) => {//(username, password) => {
        const currentUser = await authService.register(user);//username, password);
        return currentUser;
    }
)