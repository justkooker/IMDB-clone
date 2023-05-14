import styles from './GalleryList.module.scss';
import GalleryItem from '../../components/GalleryItem';
const GalleryList = ({movies}) => {
	return (
		<ul className={styles.galleryList}>
			{movies.map(movie => (
				<GalleryItem movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default GalleryList;
