import styles from './SectionTitle.module.scss';

const SectionTitle = ({ text, color }) => {
	return (
		<h3 style={{ color: color }} className={styles.title}>
			{text}
		</h3>
	);
};

export default SectionTitle;
