import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';

interface ISearchlist {
	searchlist: IMovie[];
}
const initialState: ISearchlist = {
	searchlist: []
};

const searchlistSlice = createSlice({
	name: 'searchlist',
	initialState,
	reducers: {
		createSearchlist: (state, { payload }) => {
			state.searchlist = payload;
		}
	},
});
export const { createSearchlist } = searchlistSlice.actions;
export default searchlistSlice.reducer;
