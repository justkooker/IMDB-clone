import { getMoviesByQuery } from '../../helpers/requests';
import styles from './Search.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useResize } from '../../hooks/useResize';
import SearchButton from '../SearchButton/SearchButton';
import { useNavigate } from 'react-router';

const Search = ({ setSearchlist }) => {
	const [isActiveInput, setIsActiveInput] = useState(false);
	const [query, setQuery] = useState('');
	const [selectType, setSelectType] = useState('all');
	const navigate = useNavigate();
	const onInputChange = e => {
		setQuery(e.target.value);
	};
	const toggleInput = () => {
		return setIsActiveInput(!isActiveInput);
	};
	const getSearchlist = async () => {
		if (query === '') return;
		const response = await getMoviesByQuery(query, selectType);
		setSearchlist(response);
		navigate('/imdb-clone/search/');
		return;
	};
	const getSearchlistByEnter = async e => {
		if (query === '') return;
		if (e.key === 'Enter') {
			const response = await getMoviesByQuery(query, selectType);
			setSearchlist(response);
			navigate('/imdb-clone/search/');
			return;
		}
	};
	return (
		<div className={styles.search}>
			{useResize().width > 600 && (
				<CustomSelect setSelectType={setSelectType} />
			)}
			<input
				style={{ top: isActiveInput ? 0 : '-100%' }}
				type='text'
				className={classNames(styles.search__input)}
				placeholder='Search IMDb'
				onChange={onInputChange}
				onKeyDown={getSearchlistByEnter}
			/>

			<SearchButton
				getSearchlist={getSearchlist}
				toggleInput={toggleInput}
				query={query}
				isActiveInput={isActiveInput}
				selectType={selectType}
			/>
		</div>
	);
};
export default Search;
