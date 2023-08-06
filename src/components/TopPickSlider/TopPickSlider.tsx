import { Button } from '../Button/Button';
import IconSprite from '../IconSprite';
import SectionTitle from '../SectionTitle';
import styles from './TopPickSlider.module.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
import MovieListSlider from '../MovieListSlider';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const TopPickSlider = () => {
	const topPickMovies = useSelector(
		(state: RootState) => state.topPickMovies.list
	);
	return (
		<div className='container'>
			<div className={styles.titleContainer}>
				<SectionTitle text={'What to watch'} color={scssVars.decorColorMain} />
				<Button textColor={scssVars.decorColorSecondary}>
					<p className={styles.title}>Get more recommendations</p>
					<IconSprite
						sprite={sprite}
						id='arrow'
						width={10}
						height={10}
						fillColor={scssVars.decorColorSecondary}
					/>
				</Button>
			</div>

			<MovieListSlider
				movieList={topPickMovies}
				linkTo='top-pick'
				topic='Top picks'
				topicDescr='TV shows and movies just for you'
			/>
		</div>
	);
};
export default TopPickSlider;
