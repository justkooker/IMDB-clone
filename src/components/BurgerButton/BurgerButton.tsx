import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/menu';
import { useResize } from '../../hooks/useResize';
import styles from './BurgerButton.module.scss';
import burgerIcon from '../../assets/svg/burger-icon.svg';
import { Button } from '../Button/Button';

const BurgerButton = () => {
	const dispatch = useDispatch();
	return (
		<div className={styles.container}>
			<Button
				onClick={() => dispatch(toggleMenu())}
				paddingTB={useResize().width > 601 ? 6 : 16}
			>
				<>
					<img
						src={burgerIcon}
						className={styles.burger__img}
						alt='Burger menu icon'
					/>
					{useResize().width > 1024 && (
						<span className={styles.burger__text}>Menu</span>
					)}
				</>
			</Button>
		</div>
	);
};

export default BurgerButton;
