import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import { IAppState } from '../../App';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import WatchListButton from '../../components/WatchListButton/WatchListButton';
import { Button } from '../../components/Button/Button';
import UserButton from '../../components/UserButton/UserButton';
import LangButton from '../../components/LangButton/LangButton';

import styles from './Header.module.scss';
import imdbIcon from '../../assets/svg/imdb-pro-icon.svg';

interface IHeaderProps extends IAppState {

}

const Header: React.FC<IHeaderProps> = ({
	toggleMenu,
	watchlist,
	setSearchlist
}) => {
	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.header__container)}>
				<Logo />
				<BurgerButton toggleMenu={toggleMenu} />
				<Search setSearchlist={setSearchlist} />
				{useResize().width > 1280 && (
					<Button paddingTB={9}>
						<a href='#'>
							<img src={imdbIcon} alt='Imdb pro icon' />
						</a>
					</Button>
				)}

				{useResize().width > 1280 && (
					<Link to='/imdb-clone/watchlist'>
						<WatchListButton watchlist={watchlist} />
					</Link>
				)}
				<UserButton />
				<LangButton />
			</div>
		</header>
	);
};
export default Header;
