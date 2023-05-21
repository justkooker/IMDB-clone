import classNames from 'classnames';
import MovieCard from '../MovieCard/MovieCard';

import styles from './WatchlistPage.module.scss';

const MovieList = ({ movieList, setWatchlist }) => {
	return (
		<div className={classNames(styles.watchlist, 'container')}>
			{movieList.map(movie => {
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

export default MovieList;
