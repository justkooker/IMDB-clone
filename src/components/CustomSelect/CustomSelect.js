import Select from 'react-select';
import './CustomSelect.scss';
const options = [
    { value: 'all', label: 'All' },
    { value: 'titles', label: 'Titles' },
    { value: 'tv', label: 'TV Episodes' },
    { value: 'celebs', label: 'Celebs' },
    { value: 'companies', label: 'Companies' },
];

const CustomSelect = ({setSelectType}) => {

    return <Select
        classNamePrefix='custom-select'
        defaultValue={options[0]}
        onChange={(e) => setSelectType(e.value)}
        options={options}
    />
}

export default CustomSelect;