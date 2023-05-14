import styles from './Search.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useResize } from '../../hooks/useResize';
import { Button } from '../Button/Button';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.scss';
const Search = () => {
	const [isActiveInput, setIsActiveInput] = useState(false);
	const toggleInput = () => {
		setIsActiveInput(!isActiveInput);
	};

	return (
		<div className={styles.search}>
			{useResize().width > 600 && <CustomSelect />}
			<input
				style={{ top: isActiveInput ? 0 : '-100%' }}
				type='text'
				className={classNames(styles.search__input)}
				placeholder='Search IMDb'
			/>

			{useResize().width > 601 ? (
				<Button
					customStyles={{
						background: scssVars.colorMain,
						borderTopLeftRadius: '0',
						borderBottomLeftRadius: 0,
						height: '33px'
					}}
				>
					<IconSprite
						sprite={sprite}
						id='search'
						width={24}
						height={24}
						fillColor={scssVars.bgColorMain}
					/>
				</Button>
			) : (
				<Button onClick={toggleInput} borderRadius='50%' paddingTB='16px'>
					<IconSprite
						sprite={sprite}
						id='search'
						width={24}
						height={24}
						fillColor={scssVars.colorMain}
					/>
				</Button>
			)}
			{useResize().width < 600 && (
				<Button
					onClick={toggleInput}
					borderRadius='50%'
					paddingTB='12px'
					paddingLR='12px'
					customStyles={{
						position: 'absolute',
						top: isActiveInput ? '50%' : '-100%',
						opacity: isActiveInput ? 1 : 0,
						right: 0,
						marginRight: '5px',
						transform: 'translateY(-50%)',
						transition: 'top 0.2s opacity 0.1s',
						zIndex: 1
					}}
				>
					<IconSprite
						sprite={sprite}
						id='close-menu'
						width={24}
						height={24}
						fillColor={scssVars.colorMain}
					/>
				</Button>
			)}
		</div>
	);
};
export default Search;
