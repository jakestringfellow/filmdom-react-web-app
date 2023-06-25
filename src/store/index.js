import userReducer from "../project/users-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});