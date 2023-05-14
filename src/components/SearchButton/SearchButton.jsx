import { Button } from '../Button/Button';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.scss';
const SearchButton = () => {
	return (
		<Button borderRadius='50%' paddingTB='16px' >
			<IconSprite
				sprite={sprite}
				id='search'
				width={24}
				height={24}
				fillColor={scssVars.colorMain}
			/>
		</Button>
	);
};

export default SearchButton;
