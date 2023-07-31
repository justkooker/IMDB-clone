import React, { useState, useRef, useEffect, useCallback } from 'react';

import classNames from 'classnames';
import { useResize } from '../../hooks/useResize';
import Slider from 'react-slick';
import { IMovie } from '../../components/FirstScreenMovieSlider/FirstScreenMovieSlider';
import FirstScreenMovieSlider from '../../components/FirstScreenMovieSlider';
import NextMovieSlider from '../../components/NextMovieSlider';
import styles from './FirstScreen.module.scss';

interface IFirstScreen {
	popularMovies: IMovie[];
	popularMoviesSlider2: IMovie[];
	setWatchlist: React.Dispatch<React.SetStateAction<IMovie[]>>;
}
const FirstScreen: React.FC<IFirstScreen> = ({
	popularMovies,
	popularMoviesSlider2,
	setWatchlist
}) => {
	const [nav1, setNav1] = useState<Slider | null>(null);
	const [nav2, setNav2] = useState<Slider | null>(null);

	const slider1 = useRef<Slider | null>(null);
	const slider2 = useRef<Slider | null>(null);
	const setNav1Callback = useCallback(
		(slider: Slider | null) => {
			if (slider !== null) {
				setNav1(slider);
			}
		},
		[setNav1]
	);
	useEffect(() => {
		if (slider1.current !== null) {
			setNav1(slider1.current);
		}

		if (slider2.current !== null) {
			setNav2(slider2.current);
		}
	}, [setNav1Callback]);


	const screenWidth = useResize().width;
console.log(nav1);
	return (
		<section className={classNames('container', styles.banner)}>
			<FirstScreenMovieSlider
				nav={nav2 || undefined}
				sliderRef={slider1}
				popularMovies={popularMovies}
				setWatchlist={setWatchlist}
			/>
			{screenWidth > 1024 && (
				<NextMovieSlider
					nav={nav1 || undefined}
					sliderRef={slider2}
					popularMovies={popularMoviesSlider2}
				/>
			)}
		</section>
	);
};

export default FirstScreen;
