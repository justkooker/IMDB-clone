import MovieList from '../../components/MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const WatchListPage = () => {
	const watchlist = useSelector(
		(state: RootState) => state.watchlist.watchlist
	);
	console.log(watchlist);
	return <MovieList movieList={watchlist} />;
};
export default WatchListPage;
