import { createSlice } from "@reduxjs/toolkit";
import homeTuits from './home-tuits.json';

const homeTuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: { homeTuits: homeTuits}
});

export default homeTuitsSlice.reducer;