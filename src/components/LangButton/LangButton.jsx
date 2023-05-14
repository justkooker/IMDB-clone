import styles from './LangButton.module.scss';
import { useResize } from '../../hooks/useResize';
import {Button} from '../Button/Button';

import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
const LangButton = () => {
	return (
		<Button paddingTB={useResize().width > 600 ? '6px' : '10px'}>
			<span>EN</span>
			<div className={styles.arrow}>
				<IconSprite sprite={sprite} id='arrow' width={14} height={14} />
			</div>
		</Button>
	);
};
export default LangButton;
