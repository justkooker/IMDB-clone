import styles from './WatchListButton.module.scss';
// import btnIcon from '../../assets/svg/watch-list-icon.svg';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.scss';
import { Button } from '../Button/Button';
const WatchListButton = ({ watchlist }) => {
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
				{watchlist.length > 0 && watchlist.length}
			</span>
		</Button>
	);
};
export default WatchListButton;
