import { createAsyncThunk } from "@reduxjs/toolkit";    // import createAsyncTruck
import * as service from "./tuits-service";             // import all exported functions as service


export const findTuitsThunk = createAsyncThunk(         // create thunk for findTuits
 "tuits/findTuits",                                     // give unique name, thunk invokes
 async () => await service.findTuits()                  // service function. Returned data goes in
)                                                       // redux action's payload

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',                                 // unique thunk identifier
    async (tuitId) => {                                 // wraps
        await service.deleteTuit(tuitId)                // service method
        return tuitId                                   // return tuit ID so we can remove tuit 
    }
)                                                     // from reducer's store

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit;
    }
)

export const updateTuitThunk = createAsyncThunk(        // create update tuit thunk
    'tuits/updateTuit',
    async (tuit) =>                                     // unique identifier
        await service.updateTuit(tuit)                  // accepts updated tuit
)                                                       // sends updated tuit to server with service
