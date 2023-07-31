import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
	onClick?: () => void;
	onKeyDown?: () => void;
	height?: string;
	width?: string;
	children?: string | JSX.Element | JSX.Element[];
	textColor?: string;
	borderRadius?: string;
	paddingTB?: number;
	paddingLR?: number;
	customStyles?: object;
}
interface IButtonLinkProps extends IButtonProps {
	href: string;
}
export const Button: React.FC<IButtonProps> = ({
	onClick,
	onKeyDown,
	height = 'auto',
	width = 'auto',
	children,
	textColor,
	borderRadius = '6px',
	paddingTB = 6,
	paddingLR = 16,
	customStyles
}) => {
	return (
		<button
			style={{
				color: textColor,
				borderRadius: borderRadius,
				padding: `${paddingTB}px ${paddingLR}px`,
				height: height,
				width: width,
				...customStyles
			}}
			onClick={onClick}
			onKeyDown={onKeyDown}
			className={styles.button}
		>
			{children}
		</button>
	);
};

export const ButtonLink: React.FC<IButtonLinkProps> = ({
	onClick,
	children,
	textColor,
	width = 'auto',
	height = 'auto',
	href,
	borderRadius = '6px',
	paddingTB = 5,
	paddingLR = 16
}) => {
	return (
		<a
			href={href}
			style={{
				color: textColor,
				borderRadius: borderRadius,
				padding: `${paddingTB}px ${paddingLR}px`,
				height: height,
				width: width
			}}
			onClick={onClick}
			className={styles.button}
		>
			{children}
		</a>
	);
};
