import { createSlice } from '@reduxjs/toolkit';

interface IMenuState {
	isOpenMenu: boolean;
}
const initialState: IMenuState = {
	isOpenMenu: false
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		toggleMenu: state => {
			state.isOpenMenu = !state.isOpenMenu;
		},
		closeMenuByEsc: state => {
			state.isOpenMenu = false;
		}
	}
});
export const { toggleMenu, closeMenuByEsc } = menuSlice.actions;
export default menuSlice.reducer;
