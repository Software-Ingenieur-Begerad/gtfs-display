import React, { useEffect, useState } from 'react';
import Select from '../components/select';
import {selectOptions} from '../utils/select-options';
import TablePageSwitch from '../components/table-switch';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Input from '../components/input';
import PropTypes from 'prop-types';
import config from '../config';
import {filterData} from '../utils/filter-data';
const TablePage = ({ name }) => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(parseInt(selectOptions[0],10));
    const [searchField, setSearchField] = useState('');
    const handleClickPrev = () => {
        setOset((oset) => (oset > 1 ? --oset : oset));
    };
    const handleClickNext = () => {
        setOset((oset) => ++oset);
    };
    const handleChangeLimit = (event) => {
        setLimit((limit) => parseInt(event.target.value,10));
    };
    const handleSearch = (e) => {
        setSearchField((searchField)=>e.target.value);
    };
    if (name!==null && name.indexOf(' ') === -1) {
        return (
            <>
                <Stack direction="horizontal" gap={1} className="m-1">
                    <Button variant="secondary" onClick={handleClickPrev}>
            prev
                    </Button>
                    <Button variant="secondary" onClick={handleClickNext}>
            next
                    </Button>
		    <Select
			defaultValue={selectOptions[0]}
			id="tablePageLimit"
			name="tablePageLimit"
			onChange={handleChangeLimit}
			options={selectOptions}
		    />
		    <Input
			id="tablePageSearch"
			name="tablePageSearch"
			onChange={handleSearch}
			placeholder="Search table globally"
			type="search"
			title="Enter search value"
			value={searchField}
		    />
                </Stack>
                <TablePageSwitch
		    name={name}
		    isFetched={false}
		    oset={oset}
		    limit={limit}
		    filter={searchField}
		/>
            </>
        );
    } else {
        return null;
    }
};
TablePage.propTypes = {
    name: PropTypes.string
};
export default TablePage;
