import classNames from 'classnames';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import styles from './SlickButtons.module.scss';

export const PrevButton = props => {
	const {
		onClick,
		top = null,
		right = null,
		bottom = null,
		left = null
	} = props;
	const style = {
		top,
		right,
		bottom,
		left
	};
	return (
		<div
			style={style}
			onClick={onClick}
			className={classNames(styles.slickArrow, styles.slickPrev)}
		>
			<IconSprite sprite={sprite} id='arrow' width={24} height={24} />
		</div>
	);
};
export const NextButton = props => {
	const {
		onClick,
		top = null,
		right = null,
		bottom = null,
		left = null
	} = props;
	const style = {
		top,
		right,
		bottom,
		left
	};
	return (
		<div
			style={style}
			onClick={onClick}
			className={classNames(styles.slickArrow, styles.slickNext)}
		>
			<IconSprite sprite={sprite} id='arrow' width={24} height={24} />
		</div>
	);
};
