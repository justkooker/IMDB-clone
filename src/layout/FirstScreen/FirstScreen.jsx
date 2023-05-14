import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { useResize } from '../../hooks/useResize';

import FirstScreenMovieSlider from '../../components/FirstScreenMovieSlider';
import NextMovieSlider from '../../components/NextMovieSlider';
import styles from './FirstScreen.module.scss';

const FirstScreen = ({
	popularMovies,
	popularMoviesSlider2,
	setWatchlist
}) => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);

	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

	return (
		<section className={classNames('container', styles.banner)}>
			<FirstScreenMovieSlider
				nav={nav2}
				ref={slider1}
				popularMovies={popularMovies}
				setWatchlist={setWatchlist}
			/>
			{useResize().width > 1024 && (
				<NextMovieSlider
					nav={nav1}
					ref={slider2}
					popularMovies={popularMoviesSlider2}
				/>
			)}
		</section>
	);
};

export default FirstScreen;
