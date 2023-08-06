import FirstScreen from '../../layout/FirstScreen/FirstScreen';
import TopPickSlider from '../../components/TopPickSlider';
import WatchlistSlider from '../../components/WatchlistSlider';
import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<div className={styles.main}>
			<FirstScreen />
			<TopPickSlider />
			<WatchlistSlider />
		</div>
	);
};

export default MainPage;
