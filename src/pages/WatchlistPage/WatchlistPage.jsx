import classNames from 'classnames';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList';
import styles from './WatchlistPage.module.scss';

const WatchlistPage = ({ movieList, setWatchlist, updateWatchlist }) => {
	const { watchlist } = useSelector(state => state);
	console.log(watchlist);
	return <MovieList movieList={watchlist} updateWatchlist={updateWatchlist} />;
};

export default WatchlistPage;
