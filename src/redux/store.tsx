import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import menu from './menu';
import watchlist from './watchlist';
import searchlist from './searchlist';
import topPickMovies from './topPickMovies';

export const store = configureStore({
	reducer: {
		menu,
		watchlist,
		searchlist,
		topPickMovies
	},
	devTools: true
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
