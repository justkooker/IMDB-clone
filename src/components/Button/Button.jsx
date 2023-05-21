import styles from './Button.module.scss';

export const Button = ({
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

export const ButtonLink = ({
	onClick,
	children,
	textColor,
	width = 'auto',
	height = 'auto',
	href,
	borderRadius = '6px',
	paddingTB = '5px',
	paddingLR = '16px'
}) => {
	return (
		<a
			href={href}
			style={{
				color: textColor,
				borderRadius: borderRadius,
				padding: `${paddingTB} ${paddingLR}`,
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
