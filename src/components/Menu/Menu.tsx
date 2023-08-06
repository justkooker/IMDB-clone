import classNames from 'classnames';
import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Menu.module.scss';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
import IconSprite from '../IconSprite';
import MenuItem from '../MenuItem/MenuItem';
import { RootState } from '../../redux/store';
import { toggleMenu } from '../../redux/menu';

const Menu = () => {
	const dispatch = useDispatch();
	const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);

	const body = document.body;
	const [activeItemId, setActiveItemId] = useState('');
	const [isHovered, setIsHovered] = useState(false);
	useEffect(() => {
		body.style.overflow = isOpenMenu ? 'hidden' : 'visible';
	}, [isOpenMenu]);
	const toggleItem = (e: React.MouseEvent<HTMLElement>) => {
		if (activeItemId === null || activeItemId !== e.currentTarget.id) {
			setActiveItemId(e.currentTarget.id);
			return;
		}
		setActiveItemId('');
	};

	const toggleHoverState = () => {
		setIsHovered(!isHovered);
	};

	return (
		<>
			<div
				onClick={() => dispatch(toggleMenu())}
				className={styles.background}
				style={{ display: !isOpenMenu ? 'none' : 'block' }}
			></div>
			<nav
				onKeyDown={() => dispatch(toggleMenu())}
				className={classNames(
					styles.navMenu,
					isOpenMenu ? styles.navMenu_opened : styles.navMenu_closed
				)}
			>
				<header className={classNames(styles.navHeader, styles.container)}>
					{useResize().width > 1024 && (
						<IconSprite sprite={sprite} id={'logo'} width={98} height={56} />
					)}
					<div
						className={styles.navHeader__closeBtn}
						onClick={() => dispatch(toggleMenu())}
					>
						<IconSprite
							sprite={sprite}
							id={'close-menu'}
							width={24}
							height={24}
							fillColor={
								useResize().width > 1024
									? scssVars.bgColorMain
									: scssVars.colorMain
							}
						/>
					</div>
				</header>
				<dl className={classNames(styles.menu, styles.container)}>
					<MenuItem
						id='movies'
						title='Movies'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
					>
						<dd>
							<a href='#'>Release Calendar</a>
						</dd>
						<dd>
							<a href='#'>Top 250 Movies</a>
						</dd>
						<dd>
							<a href='#'>Most Popular Movies</a>
						</dd>
						<dd>
							<a href='#'>Browse Movies by Genre</a>
						</dd>
						<dd>
							<a href='#'>Top Box Office</a>
						</dd>
						<dd>
							<a href='#'>Showtimes & Tickets</a>
						</dd>
						<dd>
							<a href='#'>Movie News</a>
						</dd>
						<dd>
							<a href='#'>India Movie Spotlight</a>
						</dd>
					</MenuItem>

					<MenuItem
						id='tv'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
						title='TV Shows'
					>
						<dd>
							<a href='#'>What's on TV & Streaming</a>
						</dd>
						<dd>
							<a href='#'>Top 250 TV Shows</a>
						</dd>
						<dd>
							<a href='#'>Most Popolar TV Shows</a>
						</dd>
						<dd>
							<a href='#'>Browse TV Shows by Genre</a>
						</dd>
						<dd>
							<a href='#'>TV News</a>
						</dd>
						<dd>
							<a href='#'>India TV Spotliht</a>
						</dd>
					</MenuItem>

					<MenuItem
						id='awards'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
						title='Awards & Events'
					>
						<dd>
							<a href='#'>Oscars</a>
						</dd>
						<dd>
							<a href='#'>Best Pictures Winners</a>
						</dd>
						<dd>
							<a href='#'>Independent Spirit Awards</a>
						</dd>
						<dd>
							<a href='#'>Women's History Month</a>
						</dd>
						<dd>
							<a href='#'>SXSW</a>
						</dd>
						<dd>
							<a href='#'>STARmeter Awards</a>
						</dd>
						<dd>
							<a href='#'>Awards Central</a>
						</dd>
						<dd>
							<a href='#'>Festival Central</a>
						</dd>
						<dd>
							<a href='#'>All Events</a>
						</dd>
					</MenuItem>
					<MenuItem
						id='celebs'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
						title='Celebs'
					>
						<dd>
							<a href='#'>Born Today</a>
						</dd>
						<dd>
							<a href='#'>Most Popular Celebs</a>
						</dd>
						<dd>
							<a href='#'>Celebrity News</a>
						</dd>
					</MenuItem>
					<MenuItem
						id='watch'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
						title='Watch'
					>
						<dd>
							<a href='#'>What to Watch</a>
						</dd>
						<dd>
							<a href='#'>Latest Trailers</a>
						</dd>
						<dd>
							<a href='#'>IMDb Originals</a>
						</dd>
						<dd>
							<a href='#'>IMDb Picks</a>
						</dd>
						<dd>
							<a href='#'>IMDb Podcasts</a>
						</dd>
					</MenuItem>
					<MenuItem
						id='community'
						toggleHoverState={toggleHoverState}
						toggleItem={toggleItem}
						activeItemId={activeItemId}
						title='Community'
					>
						<dd>
							<a href='#'>Help Center</a>
						</dd>
						<dd>
							<a href='#'>Contributor Zone</a>
						</dd>
						<dd>
							<a href='#'>Polls</a>
						</dd>
					</MenuItem>
				</dl>
			</nav>
		</>
	);
};
export default Menu;
