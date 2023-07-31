import React from 'react';
import { IMovie } from '../../components/FirstScreenMovieSlider/FirstScreenMovieSlider';
import MovieList from '../../components/MovieList';
interface WatchListPageProps {
	movieList: IMovie[];
	setWatchlist: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

const WatchListPage: React.FC<WatchListPageProps> = ({
	movieList,
	setWatchlist
}) => {
	return <MovieList movieList={movieList} setWatchlist={setWatchlist} />;
};
export default WatchListPage;
