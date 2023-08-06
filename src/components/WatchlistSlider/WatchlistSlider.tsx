import React from 'react';
import { useSelector } from 'react-redux';
import { IMovie } from '../FirstScreenMovieSlider/FirstScreenMovieSlider';
import styles from './WatchlistSlider.module.scss';
import MovieListSlider from '../MovieListSlider';
import WatchlistEmpty from '../WatchlistEmpty';
import { RootState } from '../../redux/store';

const WatchlistSlider = () => {
	const watchlist = useSelector((state:RootState)=>state.watchlist.watchlist)
	return (
		<div className='container'>
			{watchlist!.length > 0 ? (
				<MovieListSlider
					movieList={watchlist}
					linkTo='watchlist'
					topic='From your Watchlist'
					topicDescr='Movies and TV shows that you have watchlisted'
					customSettings={{ infinite: false }}
				/>
			) : (
				<WatchlistEmpty width={32} height={64} />
			)}
		</div>
	);
};
export default WatchlistSlider;
