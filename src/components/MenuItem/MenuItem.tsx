import React from 'react';
import { useResize } from '../../hooks/useResize';
import styles from './MenuItem.module.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
import IconSprite from '../IconSprite';

interface IMenuItemProps {
	id: string;
	title: string;
	activeItemId: string;
	toggleItem: (e: React.MouseEvent<HTMLElement>) => void;
	toggleHoverState: () => void;
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

const MenuItem: React.FC<IMenuItemProps> = ({
	id,
	title,
	activeItemId,
	toggleItem,
	toggleHoverState,
	children
}) => {
	return (
		<dd
			onMouseEnter={toggleHoverState}
			onMouseLeave={toggleHoverState}
			style={{
				borderTop:
					activeItemId !== id
						? 'none'
						: `1px solid ${scssVars.colorMainTransparent}`,
				borderBottom:
					activeItemId !== id
						? 'none'
						: `1px solid ${scssVars.colorMainTransparent}`,
				zIndex: 4
			}}
		>
			<dl
				className={styles.menu__item}
				style={{
					maxHeight:
						useResize().width > 1024
							? 'fit-content'
							: activeItemId === id
							? '800px'
							: '30px'
				}}
			>
				<>
					<dt onClick={toggleItem} id={id}>
						<IconSprite
							sprite={sprite}
							id={id}
							width={24}
							height={24}
							styles={{
								opacity:
									useResize().width > 1024 ? 1 : activeItemId === id ? 1 : ''
							}}
							fillColor={
								useResize().width > 1024
									? scssVars.decorColorMain
									: activeItemId !== id
									? scssVars.colorMain
									: scssVars.decorColorMain
							}
						/>
						<h3
							className={styles.menu__title}
							style={{
								color:
									useResize().width > 1024
										? 'inherit'
										: activeItemId !== id
										? scssVars.colorMain
										: scssVars.decorColorMain
							}}
						>
							{title}
						</h3>
						{useResize().width < 1024 && (
							<IconSprite
								sprite={sprite}
								id='arrow'
								fillColor={scssVars.colorMain}
								width={12}
								height={12}
								styles={{
									opacity: activeItemId === id ? 1 : ''
								}}
								rotateDeg={activeItemId !== id ? 90 : 270}
							/>
						)}
					</dt>
					{children}
				</>
			</dl>
		</dd>
	);
};

export default MenuItem;
