// import { createAsyncThunk } from "@reduxjs/toolkit";    // import createAsyncTruck
// // import * as service from "./omdb-service";             // import all exported functions as service


// export const findReviewsThunk = createAsyncThunk(         // create thunk for findTuits
//  "reviews/findReviews",                                     // give unique name, thunk invokes
//  async () => await service.findReviews()               // service function. Returned data goes in
// )                                                       // redux action's payload

// // export const deleteTuitThunk = createAsyncThunk(
// //     'tuits/deleteTuit',                                 // unique thunk identifier
// //     async (tuitId) => {                                 // wraps
// //         await service.deleteTuit(tuitId)                // service method
// //         return tuitId                                   // return tuit ID so we can remove tuit 
// //     }
// // )                                                     // from reducer's store

// export const createReviewThunk = createAsyncThunk(
//     'reviews/createReview',
//     async (review) => {
//         const newMovie = await service.reviewMovie(movieId, movie, review)
//         return newMovie;
//     }
// )

// // export const updateTuitThunk = createAsyncThunk(        // create update tuit thunk
// //     'tuits/updateTuit',
// //     async (tuit) =>                                     // unique identifier
// //         await service.updateTuit(tuit)                  // accepts updated tuit
// // )                                                       // sends updated tuit to server with service
