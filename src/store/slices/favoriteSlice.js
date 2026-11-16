import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        name: "rahul",
    },
    reducers: {
        toggleFavorites(state, action) {
            state.name = action.payload;
        },
        removeFavorites(state) { },
        clearFavorites(state) { },
    },
});

export const { toggleFavorites, removeFavorites, clearFavorites } = favoriteSlice.actions; // update the state

export default favoriteSlice.reducer; //  connect with store