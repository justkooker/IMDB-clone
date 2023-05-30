import styles from './WatchlistSlider.module.scss';
import MovieListSlider from '../MovieListSlider';
import WatchlistEmpty from '../WatchlistEmpty';

const WatchlistSlider = ({ watchlist, setWatchlist }) => {
	return (
		<div className='container'>
			{watchlist.length > 0 ? (
				<MovieListSlider
					movieList={watchlist}
					linkTo='watchlist'
					topic='From your Watchlist'
					topicDescr='Movies and TV shows that you have watchlisted'
					setWatchlist={setWatchlist}
					customSettings={{ infinite: false }}
				/>
			) : (
				<WatchlistEmpty width={32} height={64} />
			)}
		</div>
	);
};
export default WatchlistSlider;
