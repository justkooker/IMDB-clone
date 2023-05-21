import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import MovieCard from '../MovieCard/MovieCard';
import { PrevButton, NextButton } from '../SlickButtons/SlickButtons';
import ArrowTopic from '../ArrowTopic';
import styles from './MovieListSlider.module.scss';

const MovieListSlider = ({
	movieList,
	topic,
	topicDescr,
	setWatchlist,
	updateWatchlist,
	customSettings = {}
}) => {
	const sliderRef = useRef(null);
	const settings = {
		...customSettings,
		...{
			dots: false,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 6,
			swipe: false,
			initialSlide: 0,
			nextArrow: <NextButton top='35%' right='0px' />,
			prevArrow: <PrevButton top='35%' left='0px' />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						swipe: true,
						arrows: false
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						swipe: true,
						arrows: false
					}
				}
			]
		}
	};

	useEffect(() => {
		if (sliderRef.current) {
			const track = sliderRef.current.innerSlider.track.node;
			track.style.marginLeft = '0';
		}
	}, []);

	return (
		<div className={styles.sliderContainer}>
			<ArrowTopic topic={topic} topicDescr={topicDescr} arrow={true} />
			<Slider {...settings} ref={sliderRef}>
				{movieList.map(movie => {
					return (
						<MovieCard
							key={movie.id}
							movie={movie}
							setWatchlist={setWatchlist}
							updateWatchlist={updateWatchlist}
						/>
					);
				})}
			</Slider>
		</div>
	);
};
export default MovieListSlider;
