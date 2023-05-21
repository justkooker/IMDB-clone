import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from './watchlist/watchlist.slice';
const reducers = combineReducers({
    watchlist: reducer,
})
export const store = configureStore({
    reducer: reducers,
})