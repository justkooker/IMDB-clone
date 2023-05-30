import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../helpers/requests';
import FirstScreen from '../../layout/FirstScreen/FirstScreen';
import TopPickSlider from '../../components/TopPickSlider';

import styles from './MainPage.module.scss';
import WatchlistSlider from '../../components/WatchlistSlider';

const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const MainPage = ({ watchlist, setWatchlist }) => {
	const urlTopRated = `${baseUrl}movie/top_rated?api_key=${API_KEY}`;

	const [popularMovies, setPopularMovies] = useState([]);
	const [popularMoviesSlider2, setPopularMoviesSlider2] = useState([]);
	const [topPickMovies, setTopPickMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then(movies => setPopularMovies(movies));
	}, []);
	useEffect(() => {
		if (popularMovies.length > 0) {
			const [firstElement, secondElement, ...rest] = popularMovies;
			setPopularMoviesSlider2([...rest, firstElement, secondElement]);
		}
	}, [popularMovies]);
	useEffect(() => {
		fetch(urlTopRated)
			.then(response => response.json())
			.then(data => data.results)
			.then(movies => {
				setTopPickMovies(movies);
			});
	}, []);

	return (
		<div className={styles.main}>
			<FirstScreen
				popularMovies={popularMovies}
				popularMoviesSlider2={popularMoviesSlider2}
				setWatchlist={setWatchlist}
			/>
			<TopPickSlider
				movieList={topPickMovies}
				watchlist={watchlist}
				setWatchlist={setWatchlist}
			/>
			<WatchlistSlider watchlist={watchlist} setWatchlist={setWatchlist} />
		</div>
	);
};

export default MainPage;
