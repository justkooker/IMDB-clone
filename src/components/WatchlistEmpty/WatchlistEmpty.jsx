import IconSprite from '../IconSprite';
import WatchlistIcon from '../WatchlistIcon';
import sprite from '../../assets/svg/icons-sprite.svg';
import styles from './WatchlistEmpty.module.scss';
import scssVars from '../../styles/vars.scss';
import { Button } from '../Button/Button';

const WatchlistEmpty = ({ width, height }) => {
	return (
		<div className={styles.container}>
			<WatchlistIcon width={width} height={height} position='relative' />
			<p>Your watchlist is empty</p>
			<p>Save shows and movies to keep track of what you want to watch.</p>
			<Button textColor={scssVars.decorColorSecondary}>
				<span>Browse popular movies</span>
			</Button>
		</div>
	);
};

export default WatchlistEmpty;
