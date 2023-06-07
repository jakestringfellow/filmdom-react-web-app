import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const TuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: { tuits: tuits},
    reducers: {

        deleteTuit(state, action) {
            const index = state.tuits
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },
       
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {deleteTuit, createTuit }=TuitsSlice.actions;
export default TuitsSlice.reducer;