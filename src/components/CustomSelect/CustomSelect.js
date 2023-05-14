import { useState } from 'react';
import Select from 'react-select';
import './CustomSelect.scss';
const options = [
    { value: 'all', label: 'All' },
    { value: 'titles', label: 'Titles' },
    { value: 'episodes', label: 'TV Episodes' },
    { value: 'celebs', label: 'Celebs' },
    { value: 'companies', label: 'Companies' },
];

const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return <Select
        classNamePrefix='custom-select'
        defaultValue={options[0]}
        onChange={setSelectedOption}
        options={options}
    />
}

export default CustomSelect;