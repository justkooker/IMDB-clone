const IconSprite = ({
	sprite,
	id,
	width = 64,
	height = 32,
	fillColor = null,
	styles={},
	rotateDeg,
	x = null,
	y = null
}) => {
	return (
		<svg
			width={width}
			height={height}
			style={{ transform: `rotate(${rotateDeg}deg)` }}
		>
			<use fill={fillColor} x={x} y={y} xlinkHref={`${sprite}#${id}`} style={{...styles}} />
		</svg>
	);
};
export default IconSprite;
