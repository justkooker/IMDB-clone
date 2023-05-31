import React from 'react';
import classNames from 'classnames';
import { useResize } from '../../hooks/useResize';
import { createAdditionlaId } from '../../helpers/additionalId';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickSlider.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import backdrop from '../../assets/img/black-texture.jpg';
import background from '../../assets/img/first-screen-slider.jpg';
import styles from './FirstScreenMovieSlider.module.scss';
import IconSprite from '../IconSprite';
import { PrevButton, NextButton } from '../SlickButtons/SlickButtons';
import MovieCard from '../MovieCard/MovieCard';

const FIlmSLider = React.forwardRef((props, ref) => {
	const { popularMovies, nav, setWatchlist } = props;
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: false,
		nextArrow: <NextButton top='35%' right='0px' />,
		prevArrow: <PrevButton top='35%' left='0px' />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false
				}
			}
		]
	};
	const iconSize = useResize().width > 600 ? 72 : 54;

	
	return (
		<div className={classNames(styles.sliderContainer, 'grid_column-span-2')}>
			<Slider asNavFor={nav} ref={ref} {...settings}>
				{popularMovies.map(movie => {
					const backgroundImage =
						movie.backdrop_path === null
							? backdrop
							: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
					return (
						<div key={movie.id} className={styles.slide}>
							<div
								className={styles.slide__backgroundImage}
								style={{
									backgroundImage: `url(${backgroundImage})`,
									backgroundSize: 'cover'
								}}
							></div>
							<img
								src={background}
								className={styles.slide__img}
								alt='Movie poster'
							/>
							<div className={styles.info}>
								<div
									key={`${movie.id}-${createAdditionlaId()}`}
									className={styles.info__poster}
								>
									<MovieCard
										movie={movie}
										previewMode={true}
										setWatchlist={setWatchlist}
									/>
								</div>
								<div className='d-flex' style={{ gap: '10px' }}>
									<div className={styles.info__play}>
										<IconSprite
											sprite={sprite}
											id='movie-play-icon'
											width={iconSize}
											height={iconSize}
										/>
									</div>
									<div className={styles.info__container}>
										<p className={styles.info__title}>{movie.title}</p>
										<p className={styles.info__action}>Watch the Trailer</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
});
export default FIlmSLider;
