import classNames from 'classnames';
import MovieCard from '../MovieCard/MovieCard';

import styles from './MovieList.module.scss';

const MovieList = ({ movieList, setWatchlist, updateWatchlist }) => {
	return (
		<div className={classNames(styles.watchlist, 'container')}>
			{movieList.length === 0 ? (
				<p>No results</p>
			) : (
				movieList.map(movie => {
					return (
						<div key={movie.id} className={styles.watchlist__card}>
							<MovieCard
								key={movie.id}
								movie={movie}
								setWatchlist={setWatchlist}
								updateWatchlist={updateWatchlist}
							/>
						</div>
					);
				})
			)}
		</div>
	);
};

export default MovieList;
