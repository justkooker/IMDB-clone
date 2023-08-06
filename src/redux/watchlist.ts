import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';
interface IWatchlist {
	watchlist: IMovie[];
}
const initialState: IWatchlist = {
	watchlist: []
};

const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState,
	reducers: {
		loadWatchlistFromDB: (state, { payload }) => {
			state.watchlist = [...state.watchlist, ...payload];
		},
		updateWatchlist: (state, { payload }) => {
			state.watchlist = payload;
		}
	}
});
export const { updateWatchlist, loadWatchlistFromDB } = watchlistSlice.actions;
export default watchlistSlice.reducer;
