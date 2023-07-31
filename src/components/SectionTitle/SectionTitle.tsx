import React from 'react';
import styles from './SectionTitle.module.scss';
interface ISectionTitle {
	text: string;
	color?: string;
}
const SectionTitle: React.FC<ISectionTitle> = ({ text, color }) => {
	return (
		<h3 style={{ color: color }} className={styles.title}>
			{text}
		</h3>
	);
};

export default SectionTitle;
