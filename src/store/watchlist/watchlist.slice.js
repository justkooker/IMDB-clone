import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        toggleWatchlist: (state, { payload: movie }) => {
            const isExist = state.some(m => m.id === movie.id);
            if (isExist) {
                const index = state.findIndex(item => item.id === movie.id);
                    if(index !== -1) {
                    state.splice(index,1)
                   }
               
               
            }
            else {
                state.push(movie);
            }
        },

    }
})

export const { actions, reducer } = watchlistSlice;