import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlist } from './helpers/localStorage';
import Header from './layout/Header';
import Menu from './components/Menu';
import Footer from './layout/Footer/Footer';
import MainPage from './pages/MainPage';
import WatchListPage from './pages/WatchListPage';
import MovieList from './components/MovieList';
import { IMovie } from './components/FirstScreenMovieSlider/FirstScreenMovieSlider';
import './styles/vars.scss';
import './styles/normalize.scss';
import './styles/commonStyles.scss';
import './App.scss';
import { useEffect } from 'react';

import { getTopRatedMovies } from './helpers/requests';
import { RootState } from './redux/store';
import { toggleMenu, closeMenuByEsc } from './redux/menu';
import { loadWatchlistFromDB } from './redux/watchlist';
import { getTopPickMovies } from './redux/topPickMovies';


function App() {
	const dispatch = useDispatch();
	const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);
	const searchlist = useSelector(
		(state: RootState) => state.searchlist.searchlist
	);
	const topPickMovies = useSelector((state:RootState)=> state.topPickMovies.list)
	useEffect(() => {
		let watchlist = getWatchlist();
		dispatch(loadWatchlistFromDB(watchlist));
		getTopRatedMovies().then(movies => dispatch(getTopPickMovies(movies)));
	}, []);

	useEffect(() => {
		const closeMenuByEsc: EventListener = (e: Event) => {
			if ((e as KeyboardEvent).key === 'Escape' && isOpenMenu) {
				dispatch(toggleMenu());
			}
		};
		document.addEventListener('keydown', closeMenuByEsc);
		return () => {
			document.removeEventListener('keydown', closeMenuByEsc);
		};
	}, [isOpenMenu]);

	return (
		<>
			<Menu />
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/watchlist' element={<WatchListPage />} />
				<Route path='/search' element={<MovieList movieList={searchlist} />} />
				<Route
					path='/top-pick'
					element={<MovieList movieList={topPickMovies} />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
