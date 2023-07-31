import React from 'react';
import classNames from 'classnames';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import styles from './SlickButtons.module.scss';

interface ButtonProps {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}
export const PrevButton: React.FC<ButtonProps> = ({
	onClick,
	top,
	right,
	bottom,
	left
}) => {
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
export const NextButton: React.FC<ButtonProps> = ({
	onClick,
	top,
	right,
	bottom,
	left
}) => {
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
