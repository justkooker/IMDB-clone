import React from 'react';
import Select from 'react-select';
import './CustomSelect.scss';
const options = [
	{ value: 'all', label: 'All' },
	{ value: 'titles', label: 'Titles' },
	{ value: 'tv', label: 'TV Episodes' },
	{ value: 'celebs', label: 'Celebs' },
	{ value: 'companies', label: 'Companies' }
];
interface ICustomSelectProps {
	setSelectType: (value: string) => void;
}
const CustomSelect: React.FC<ICustomSelectProps> = ({ setSelectType }) => {
	return (
		// <Select
		// 	classNamePrefix='custom-select'
		// 	defaultValue={options[0]}
		// 	onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
		// 		setSelectType(e.value);
		// 	}}
		// 	options={options}
		// />
		  <Select
      classNamePrefix='custom-select'
      defaultValue={options[0]}
      onChange={(selectedOption: any) => {
        if (selectedOption) {
          setSelectType(selectedOption.value as string);
        }
      }}
      options={options}
    />
	);
};

export default CustomSelect;
