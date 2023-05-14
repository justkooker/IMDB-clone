import styles from './ArrowLink.module.scss';

const ArrowLink = ({color,fontSize}) => {
	return (
		<a className={styles.link} href='#'>
			Browse trailers
		</a>
	);
};
export default ArrowLink;
