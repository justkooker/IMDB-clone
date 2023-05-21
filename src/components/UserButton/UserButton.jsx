import styles from './UserButton.module.scss';
import { Button } from '../Button/Button';
import { useResize } from '../../hooks/useResize';

import userIcon from '../../assets/svg/user-icon.svg';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';

const UserButton = () => {
	return (
		<Button
			borderRadius={useResize().width > 600 ? '6px' : '50%'}
			paddingTB={useResize().width > 600 ? 6 : 16}

		>
			<img src={userIcon} alt='User icon' />
			{useResize().width > 600 && (
				<>
					<span>Ivan</span>
					<div className={styles.arrow}>
						<IconSprite sprite={sprite} id='arrow' width={14} height={14} />
					</div>
				</>
			)}
		</Button>
	);
};

export default UserButton;
