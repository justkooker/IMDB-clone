import styles from './GalleryItem.module.scss';

const GalleryItem = ({ movie }) => {
	return (
		<li className={styles.movie}>
			<div className={styles.movie__poster}>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt='Movie poster'
					className={styles.movie__img}
				/>
			</div>
			<p className={styles.movie__title}>{movie.original_title}</p>
			<p className={styles.movie__year}>{movie.release_date}</p>
		</li>
	);
    

};
    export default GalleryItem;