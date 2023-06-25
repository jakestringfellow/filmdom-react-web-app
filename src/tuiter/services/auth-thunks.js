import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "users/login", async (username, password) => {
        const user = await authService.login(username, password);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
        const response = await authService.profile();
        return response.data;
    }
);

export const logoutThunk = createAsyncThunk(
    "auths/logout", async () => {
        return await authService.logout();
    }
);

export const updateUserThunk = createAsyncThunk(
    "users/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "auth/registerUser", async (username, password) => {
        const user = await authService.register(username, password);
        return user;
    }
)