import styles from './Logo.module.scss';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link to='/'>
				<img src={logo} alt='Logo' className={styles.logo__img} />
			</Link>
		</div>
	);
};

export default Logo;
