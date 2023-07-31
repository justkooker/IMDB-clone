import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { getWatchlist } from './helpers/localStorage';
import Header from './layout/Header';
import Menu from './components/Menu';
import Footer from './layout/Footer/Footer';
import MainPage from './pages/MainPage';
import WatchListPage from './pages/WatchListPage';
import { IMovie } from './components/FirstScreenMovieSlider/FirstScreenMovieSlider';
import './styles/vars.scss';
import './styles/normalize.scss';
import './styles/commonStyles.scss';
import './App.scss';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import { getTopRatedMovies } from './helpers/requests';

export interface IAppState {
	isOpenMenu?: boolean;
	watchlist?: IMovie[];
	searchlist?: IMovie[];
	topPickMovies?: IMovie[];
	toggleMenu?: () => void;
	closeMenuByEsc?: () => void;
	setSearchlist: React.Dispatch<React.SetStateAction<IMovie[]>>;
	setWatchlist: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

function App() {
	let [isOpenMenu, setIsOpenMenu] = useState(false);
	let [watchlist, setWatchlist] = useState<IMovie[]>([]);
	let [searchlist, setSearchlist] = useState<IMovie[]>([]);
	let [topPickMovies, setTopPickMovies] = useState<IMovie[]>([]);
	useEffect(() => {
		let watchlist = getWatchlist();
		setWatchlist(watchlist);
		getTopRatedMovies().then(movies => setTopPickMovies(movies));
	}, []);

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
		return;
	};
	const closeMenuByEsc: EventListener = (e: KeyboardEventInit) => {
		if (isOpenMenu && e.key === 'Escape') {
			setIsOpenMenu(!isOpenMenu);
			return;
		}
	};
	useEffect(() => {
		document.addEventListener('keydown', closeMenuByEsc);
		return () => {
			document.removeEventListener('keydown', closeMenuByEsc);
		};
	}, []);

	return (
		<>
			<Menu
				toggleMenu={toggleMenu}
				isOpenMenu={isOpenMenu}
				activeItemId={''}
				toggleItem={function (
					e: React.MouseEvent<HTMLElement, MouseEvent>
				): void {
					throw new Error('Function not implemented.');
				}}
				toggleHoverState={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<Header
				toggleMenu={toggleMenu}
				isOpenMenu={isOpenMenu}
				watchlist={watchlist}
				setSearchlist={setSearchlist}
				setWatchlist={setWatchlist}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<MainPage
							watchlist={watchlist}
							setWatchlist={setWatchlist}
							topPickMovies={topPickMovies}
						/>
					}
				/>
				<Route
					path='/watchlist'
					element={
						<WatchListPage movieList={watchlist} setWatchlist={setWatchlist} />
					}
				/>
				<Route
					path='/search'
					element={
						<MovieList movieList={searchlist} setWatchlist={setWatchlist} />
					}
				/>
				<Route
					path='/top-pick'
					element={
						<MovieList movieList={topPickMovies} setWatchlist={setWatchlist} />
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
