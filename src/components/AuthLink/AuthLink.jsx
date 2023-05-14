import styles from './AuthLink.module.scss';

const AuthLink = props => {
	return (
		<a href='#' className={styles.authLink}>
			Logout
		</a>
	);
};

export default AuthLink;
