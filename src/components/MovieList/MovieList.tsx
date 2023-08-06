import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { IMovie } from '../FirstScreenMovieSlider/FirstScreenMovieSlider';
import MovieCard from '../MovieCard/MovieCard';

import styles from './MovieList.module.scss';
interface MovieListProps {
	movieList: IMovie[];
}
const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
	return (
		<div className={classNames(styles.watchlist, 'container')}>
			{movieList!.length === 0 ? (
				<p>No results</p>
			) : (
				movieList!.map(movie => {
					return (
						<div key={movie.id} className={styles.watchlist__card}>
							<MovieCard
								key={movie.id}
								movie={movie}
							/>
						</div>
					);
				})
			)}
		</div>
	);
};

export default MovieList;
