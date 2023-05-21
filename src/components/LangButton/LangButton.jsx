import styles from './LangButton.module.scss';
import {Button} from '../Button/Button';

import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
const LangButton = () => {
	return (
		<Button paddingTB={9}>
			<span>EN</span>
			<div className={styles.arrow}>
				<IconSprite sprite={sprite} id='arrow' width={15} height={15} />
			</div>
		</Button>
	);
};
export default LangButton;
