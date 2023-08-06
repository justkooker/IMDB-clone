import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';
interface ITopPickMovies {
	list: IMovie[];
}
const initialState: ITopPickMovies = {
	list: []
};

const watchlistSlice = createSlice({
	name: 'topPickMovies',
	initialState,
	reducers: {
		getTopPickMovies: (state, { payload }) => {
			state.list = payload;
		}
	}
});
export const { getTopPickMovies } = watchlistSlice.actions;
export default watchlistSlice.reducer;
