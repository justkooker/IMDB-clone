import { Button } from '../Button/Button';
import IconSprite from '../IconSprite';
import WatchlistIcon from '../WatchlistIcon';
import styles from './MovieCard.module.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import scssVars from '../../styles/vars.scss';
import {
	isMovieInWatchlist,
	addInWatchlist,
	getWatchlist,
	removeFromWatchlist
} from '../../helpers/localStorage';

const MovieCard = ({ movie, setWatchlist }) => {
	const {
		id = '',
		poster_path = '',
		title = '',
		vote_average = ''
	} = movie || {};

	const [isInWatchlist, setIsInWatchlist] = useState(() =>
		isMovieInWatchlist(id)
	);
	const [isLoading, setIsLoading] = useState(false);
	const toggleWatchlist = id => {
		setIsLoading(true);
		if (isMovieInWatchlist(id)) removeFromWatchlist(id);
		else addInWatchlist(id);
		setIsInWatchlist(!isInWatchlist);
		setWatchlist(getWatchlist());

		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	};
	return (
		<div key={movie.id} className={styles.card}>
			<div className={styles.watchlistIcon}>
				<WatchlistIcon
					width={32}
					height={64}
					isInWatchlist={isInWatchlist}
					onClick={() => toggleWatchlist(id)}
					isLoading={isLoading}
				/>
			</div>
			<div className={styles.card__poster}>
				<img
					src={`https://image.tmdb.org/t/p/original/${poster_path}`}
					alt='Image poster'
					className={styles.card__img}
				/>
			</div>

			<div className={styles.info}>
				<div className={styles.card__rateContainer}>
					<div className={styles.card__rateContainer_yellow}>
						<IconSprite
							sprite={sprite}
							id='filled-star'
							fillColor={scssVars.decorColorMain}
							width={16}
						/>
					</div>
					<span className={styles.card__rate}>{vote_average}</span>
					<Button>
						<div className={styles.card__rateContainer_blue}>
							<IconSprite
								sprite={sprite}
								id='empty-star'
								fillColor={scssVars.decorColorSecondary}
								width={16}
							/>
						</div>
					</Button>
				</div>
				<p className={styles.card__title}>{title}</p>
				<div className={styles.card__watchlistBtn}>
					{isLoading ? (
						<div className={styles.loadingContainer}>
							<ClipLoader
								size={34}
								color={scssVars.decorColorSecondary}
								loading={isLoading}
							/>
						</div>
					) : isInWatchlist ? (
						<Button onClick={() => toggleWatchlist(id)} width='100%'>
							<IconSprite
								sprite={sprite}
								id='done-icon'
								fillColor={scssVars.decorColorSecondary}
								width={24}
								height={24}
							/>
							<span>Watchlist</span>
						</Button>
					) : (
						<Button onClick={() => toggleWatchlist(id)} width='100%'>
							<IconSprite
								sprite={sprite}
								id='plus-icon'
								fillColor={scssVars.colorMain}
								width={24}
								height={24}
							/>
							<span>Watchlist</span>
						</Button>
					)}
				</div>
				<div className={styles.card__trailer}>
					<Button paddingLR='8px'>
						<IconSprite
							sprite={sprite}
							id='card-play-icon'
							fillColor={scssVars.colorMain}
							width={24}
						/>
						<span>Trailer</span>
					</Button>
					<Button
						borderRadius='50%'
						paddingLR='10px'
						paddingTB='10px'
						height={'fit-content'}
					>
						<IconSprite
							sprite={sprite}
							id='movie-info-icon'
							fillColor={scssVars.colorMain}
							width={27}
							height={27}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};
export default MovieCard;
