import React from 'react';
import WatchlistIcon from '../WatchlistIcon';
import styles from './WatchlistEmpty.module.scss';
import scssVars from '../../styles/vars.module.scss';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

interface WatchlistEmptyProps {
	width?: number;
	height?: number;
}

const WatchlistEmpty: React.FC<WatchlistEmptyProps> = ({ width, height }) => {
	return (
		<div className={styles.container}>
			<Link to={'/IMDB-clone/watchlist'}>
				<WatchlistIcon width={width} height={height} position='relative' />
			</Link>
			<p>Your watchlist is empty</p>
			<p>Save shows and movies to keep track of what you want to watch.</p>
			<Button textColor={scssVars.decorColorSecondary}>
				<span>Browse popular movies</span>
			</Button>
		</div>
	);
};

export default WatchlistEmpty;
