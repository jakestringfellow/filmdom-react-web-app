import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits}
});

export default tuitsSlice.reducer;