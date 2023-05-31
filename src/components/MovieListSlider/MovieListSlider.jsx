import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { createAdditionlaId } from '../../helpers/additionalId';
import MovieCard from '../MovieCard/MovieCard';
import { PrevButton, NextButton } from '../SlickButtons/SlickButtons';
import ArrowTopic from '../ArrowTopic';
import styles from './MovieListSlider.module.scss';
import { Link } from 'react-router-dom';

const MovieListSlider = ({
	movieList,
	topic,
	topicDescr,
	setWatchlist,
	linkTo,
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
			<Link to={`/imdb-clone/${linkTo}`}>
				<ArrowTopic topic={topic} topicDescr={topicDescr} arrow={true} />
			</Link>
			<Slider {...settings} ref={sliderRef}>
				{movieList.map(movie => {
					return (
						<div key={`${movie.id}-${createAdditionlaId()}`}>
							<MovieCard
								movie={movie}
								setWatchlist={setWatchlist}
								key={`${movie.id}-${createAdditionlaId()}`}
							/>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default MovieListSlider;
