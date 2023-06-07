import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const TuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: { tuits: tuits}
});

export default TuitsSlice.reducer;