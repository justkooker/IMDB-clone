import React from 'react';
import { useResize } from '../../hooks/useResize';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.module.scss';
interface ISearchButtonProps {
	// query: string;
	toggleInput: () => void;
	isActiveInput: boolean;
	getSearchlist: () => void;
}

const SearchButton: React.FC<ISearchButtonProps> = ({
	// query,
	toggleInput,
	isActiveInput,
	getSearchlist
}) => {
	return (
		<>
			{useResize().width > 601 ? (
				<Button
					onClick={getSearchlist}
					onKeyDown={getSearchlist}
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
				<Button
					onClick={toggleInput}
					borderRadius='50%'
					paddingTB={16}
					// query={query}
				>
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
					paddingTB={12}
					paddingLR={12}
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
		</>
	);
};

export default SearchButton;
