import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import WatchListButton from '../../components/WatchListButton/WatchListButton';
import { Button } from '../../components/Button/Button';
import UserButton from '../../components/UserButton/UserButton';
import LangButton from '../../components/LangButton/LangButton';

import styles from './Header.module.scss';
import imdbIcon from '../../assets/svg/imdb-pro-icon.svg';
import SearchButton from '../../components/SearchButton/SearchButton';

const Header = ({ toggleMenu, watchlist }) => {
	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.header__container)}>
				<Logo />
				<BurgerButton toggleMenu={toggleMenu} />
				<Search />
				{useResize > 1280 && (
					<Button>
						<a href='#'>
							<img src={imdbIcon} alt='Imdb pro icon' />
						</a>
					</Button>
				)}

				{useResize().width > 1280 && (
					<Link to='/watchlist'>
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

//<span className={styles.separator}></span>
