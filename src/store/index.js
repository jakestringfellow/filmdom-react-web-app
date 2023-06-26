import userReducer from "../filmdom/users-reducer";
import { configureStore } from "@reduxjs/toolkit";
import tuitsReducer from "../tuiter/reducers/tuits-reducer";
import whoReducer from "../tuiter/reducers/who-reducer";
import homeTuitsReducer from "../tuiter/tuits/tuits-reducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    tuits: tuitsReducer,
    who: whoReducer, 
    tuits: homeTuitsReducer
  },
});