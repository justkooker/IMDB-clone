import classNames from 'classnames';
import MovieCard from '../../components/MovieCard/MovieCard';

import styles from './WatchlistPage.module.scss';

const WatchlistPage = ({ watchlist, setWatchlist }) => {
	return (
		<div className={classNames(styles.watchlist, 'container')}>
			{watchlist.map(movie => {
				return (
					<div className={styles.watchlist__card}>
						<MovieCard
							key={movie.id}
							movie={movie}
							setWatchlist={setWatchlist}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default WatchlistPage;
