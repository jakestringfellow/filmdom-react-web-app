//import userReducer from "../filmdom/users-reducer";
import usersReducer from "../tuiter/reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";
import tuitsReducer from "../tuiter/reducers/tuits-reducer";
import whoReducer from "../tuiter/reducers/who-reducer";
import homeTuitsReducer from "../tuiter/tuits/tuits-reducer";
// import reviewsReducer from "../filmdom/reviews/reviews-reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    tuits: tuitsReducer,
    who: whoReducer, 
    tuits: homeTuitsReducer,
    // reviews: reviewsReducer
  },
});