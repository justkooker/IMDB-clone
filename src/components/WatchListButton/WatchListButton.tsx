import React from 'react';
import styles from './WatchListButton.module.scss';
import { IMovie } from '../FirstScreenMovieSlider/FirstScreenMovieSlider';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
import { Button } from '../Button/Button';

interface WatchListButtonProps {
	watchlist?: IMovie[];
}

const WatchListButton: React.FC<WatchListButtonProps> = ({ watchlist }) => {
	return (
		<Button>
			<IconSprite
				id='watchlist-header-icon'
				sprite={sprite}
				width={24}
				height={24}
				fillColor={scssVars.colorMain}
			/>
			<span>Watchlist</span>
			<span className={styles.watchlistLength}>
				{watchlist!.length > 0 && watchlist!.length}
			</span>
		</Button>
	);
};
export default WatchListButton;
