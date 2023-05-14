import React from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import IconSprite from '../IconSprite';

import styles from './NextMovieSlider.module.scss';
import scssVars from '../../styles/vars.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import ArrowTopic from '../ArrowTopic';

const NextMovieSlider = React.forwardRef(({ popularMovies, nav }, ref) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		centerMode: true,
		centerPadding: '8px',
		swipeToSlide: false,
		arrows: false
	};

	return (
		<div className={styles.nextFilm}>
			<p className={styles.title}>Up next</p>
			<div className={classNames(styles.sliderContainer, 'grid_column-span-1')}>
				<Slider asNavFor={nav} ref={ref} {...settings}>
					{popularMovies.length > 0
						? popularMovies.map(movie => {
								return (
									<div key={movie.id}>
										<div className={styles.slide}>
											<div key={movie.id} className={styles.slide__poster}>
												<img
													src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
													alt='Movie poster'
													className={styles.slide__img}
												/>
											</div>
											<div className={styles.info}>
												<IconSprite
													sprite={sprite}
													id='movie-play-icon'
													width={32}
													height={32}
												/>
												<p className={styles.info__title}>{movie.title}</p>
												<p className={styles.info__action}>
													Watch the New Trailer
												</p>
											</div>
										</div>
									</div>
								);
						  })
						: null}
				</Slider>
			</div>
			<ArrowTopic
				hoverColor={scssVars.decorColorMain}
				arrow={true}
				separator={false}
				topic='Browse trailers'
				arrowSize={10}
			/>
		</div>
	);
});

export default NextMovieSlider;
