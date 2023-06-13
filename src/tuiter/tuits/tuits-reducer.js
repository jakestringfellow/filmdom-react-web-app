import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";
import { FaGlasses } from "react-icons/fa";

const initialState = {                                      // initial state has
    tuits: [],                                              // no tuits
    loading: false                                          // loading flag to display spinner
}   

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
    initialState,                                           // same as "initialState": initialState
    extraReducers: {                                        // define asynchronous reducers

        [updateTuitThunk.fulfilled]:                        // when server update is done
            (state, { payload }) => {                       // payload contains updated tuit
                state.loading = false                       // clear Loading flag
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id) // find index of updated tuit in array
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }      // merge old tuit with updated tuit
            },

        [createTuitThunk.fulfilled]:                        // when server responds
            (state, { payload }) => {                       // payload contains new tuit    
                state.loading = false                       // clear loading flag
                state.tuits.push(payload)                   // append new tuit to tuits array
            },                                              // ignoring pending and rejected thunks

        [deleteTuitThunk.fulfilled] :                                        // hand successful response
            (state, { payload }) => {                                       // server response successful
                state.loading = false                                       // payload from action contains tuit ID to
                state.tuits = state.tuits.filter(t => t._id !== payload)   // remove, turn off loading flag
            },                                                              // filter out tuit whose ID matches tuit
                                                                            // to remove, we're ignoring pending and rejected thunks

        [findTuitsThunk.pending]:                           // if request is not yet fulfilled ...
            (state) => {    
            state.loading = true                            // set loading true so UI can display spinner
            state.tuits = [] },                             // empty tuits since we are still fetching them

        [findTuitsThunk.fulfilled]:                         // when we get response, request is fulfilled
            (state, { payload }) => {                       // we extract/destruct payLoad from action object
            state.loading = false                           // turn off loading flag since we have the data
            state.tuits = payload },                        // payload has tuits from server and update redux state

        [findTuitsThunk.rejected]:                          // if request times out, or responds with error
            (state, action) => {                        
            state.loading = false                           // reset loading flag
            state.error = action.error                      // report error
            }

    },
    reducers: { }                                           // we are not going to use old reducers anymore
});

 export const {deleteTuit, createTuit }=TuitsSlice.actions;
 export default TuitsSlice.reducer;