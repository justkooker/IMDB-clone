import React from 'react';
interface IconSpriteProps {
	sprite: string;
	id: string;
	width?: number;
	height?: number;
	fillColor?: string;
	styles?: object;
	rotateDeg?: number;
	x?: number;
	y?: number;
}
const IconSprite: React.FC<IconSpriteProps> = ({
	sprite,
	id,
	width = 64,
	height = 32,
	fillColor,
	styles = {},
	rotateDeg,
	x,
	y
}) => {
	return (
		<svg
			width={width}
			height={height}
			style={{ transform: `rotate(${rotateDeg}deg)` }}
		>
			<use
				fill={fillColor}
				x={x}
				y={y}
				xlinkHref={`${sprite}#${id}`}
				style={{ ...styles }}
			/>
		</svg>
	);
};
export default IconSprite;
