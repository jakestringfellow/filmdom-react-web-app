import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
        const response = await authService.profile();
        return response.data;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
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
    "auth/registerUser", async (username, password) => {
        const user = await authService.register(username, password);
        return user;
    }
)