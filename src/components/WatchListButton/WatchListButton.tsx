import styles from './WatchListButton.module.scss';
import { useSelector } from 'react-redux';
import { IMovie } from '../FirstScreenMovieSlider/FirstScreenMovieSlider';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
import { Button } from '../Button/Button';
import { RootState } from '../../redux/store';


const WatchListButton = () => {
	const watchlist = useSelector((state:RootState)=> state.watchlist.watchlist)
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
