import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.scss';
import styles from './ArrowTopic.module.scss';
import { useState } from 'react';

const ArrowTopick = ({
	topic,
	topicDescr = '',
	fontSize,
	arrow = false,
	hoverCursor = true,
	hoverColor,
	separator = true,
	arrowSize = 18
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const toggleOnMouseMove = () => {
		setIsHovered(!isHovered);
	};
	return (
		<div className={styles.topicContainer}>
			<div className={styles.topic} style={{ cursor: 'auto' }}>
				{separator && <div className={styles.topic__separator}></div>}
				<h3
					onMouseEnter={toggleOnMouseMove}
					onMouseOut={toggleOnMouseMove}
					className={styles.topic__title}
					style={{
						fontSize: fontSize,
						cursor: hoverCursor ? 'pointer' : 'auto',
						paddingLeft: separator ? '12px' : 0,
						color: isHovered ? hoverColor : ''
					}}
				>
					{topic}
				</h3>
				{arrow && (
					<IconSprite
						sprite={sprite}
						id='arrow'
						fillColor={scssVars.colorMain}
						hoverFillColor={scssVars.decorationColorMain}
						width={arrowSize}
						height={arrowSize}
					/>
				)}
			</div>
			{topicDescr && <p className={styles.topic__descr}>{topicDescr}</p>}
		</div>
	);
};

export default ArrowTopick;
