import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        items: []
    },
    reducers: {
        toggleFavorites(state, action) {
            const event = action.payload;
            const existingEvent = state.items.find((e) =>
                (e.id || e._id) === (event.id || event._id),
            );
            if (existingEvent) {
                state.items = state.items.filter((e) =>
                    (e.id || e._id) !== (event.id || event._id),
                );
            } else {
                state.items.push(action.payload);
            }
        },
        removeFavorites(state) { },
        clearFavorites(state) { },
    },
});

export const { toggleFavorites, removeFavorites, clearFavorites } = favoriteSlice.actions; // update the state

export default favoriteSlice.reducer; //  connect with store