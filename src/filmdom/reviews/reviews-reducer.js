// import { createSlice } from "@reduxjs/toolkit";
// //import tuits from './tuits.json';
// //import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";
// import { updateReview, reviewMovie, deleteReview, findReviews } from "../omdb-service.js"
// import { FaGlasses } from "react-icons/fa";

// const initialState = {                                      // initial state has
//     reducers: [],                                              // no reducers
//     loading: false                                          // loading flag to display spinner
// }   

// // const currentUser = {
// //     "userName": "NASA",
// //     "handle": "@nasa",
// //     "image": "nasa.png",
// // };
   
//    const templateReview = {
//     //...currentUser,
//     "user": "alice",
//     "movie": "Jurassic Park",
//     // "time": "2h",
//     // "liked": false,
   
//     "review": "Good movie",
//     "likes": 0,
//     "dislikes": 0
// }
   

// const ReviewsSlice = createSlice({
//     name: 'reviews',
//     initialState,                                           // same as "initialState": initialState
//     extraReducers: {                                        // define asynchronous reducers

//         [updateReview.fulfilled]:                        // when server update is done
//             (state, { payload }) => {                       // payload contains updated tuit
//                 state.loading = false                       // clear Loading flag
//                 const reviewNdx = state.reviews.findIndex((r) => r._id === payload._id) // find index of updated tuit in array
//                 state.reviews[reviewNdx] = { ...state.reviews[reviewNdx], ...payload }      // merge old tuit with updated tuit
//             },

//         [reviewMovie.fulfilled]:                        // when server responds
//             (state, { payload }) => {                       // payload contains new review    
//                 state.loading = false                       // clear loading flag
//                 state.reviews.push(payload)                   // append new review to reviews array
//             },                                              // ignoring pending and rejected thunks

//         [deleteReview.fulfilled] :                                        // hand successful response
//             (state, { payload }) => {                                       // server response successful
//                 state.loading = false                                       // payload from action contains tuit ID to
//                 state.reviews = state.reviews.filter(r => r._id !== payload)   // remove, turn off loading flag
//             },                                                              // filter out tuit whose ID matches tuit
//                                                                             // to remove, we're ignoring pending and rejected thunks

//          [findReviews.pending]:                           // if request is not yet fulfilled ...
//             (state) => {    
//             state.loading = true                            // set loading true so UI can display spinner
//             state.reviews = [] },                             // empty tuits since we are still fetching them

//         [findReviews.fulfilled]:                         // when we get response, request is fulfilled
//             (state, { payload }) => {                       // we extract/destruct payLoad from action object
//             state.loading = false                           // turn off loading flag since we have the data
//             state.reviews = payload },                        // payload has tuits from server and update redux state

//         [findReviews.rejected]:                          // if request times out, or responds with error
//             (state, action) => {                        
//             state.loading = false                           // reset loading flag
//             state.error = action.error                      // report error
//             }

//     },
//     reducers: { }                                           // we are not going to use old reducers anymore
// });

//  export const {deleteReviewAction,reviewMovieAction }=ReviewsSlice.actions;
//  export default ReviewsSlice.reducer;