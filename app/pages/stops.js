import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from '../components/select';
import {selectOptions} from '../utils/select-options';
import StopsTable from '../components/stops-table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Input from '../components/input';
import config from '../config';
const Stops = () => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(selectOptions[2]);
    const [ary, setAry] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredAry = ary.filter((item, index) => {
        return (
            item.stop_id.toLowerCase().includes(searchField.toLowerCase()) ||
		(item.stop_code!==null && item.stop_code.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.stop_name!==null && item.stop_name.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.stop_desc!==null && item.stop_descr.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.stop_lat!==null && item.stop_lat.toString().includes(searchField)) ||
		(item.stop_lon!==null && item.stop_lon.toString().includes(searchField)) ||
		(item.location_type!==null && item.location_type.toString().includes(searchField)) ||
		(item.parent_station!==null && item.parent_station.toString().includes(searchField)) ||
		(item.wheelchair_boarding!==null && item.wheelchair_boarding.toString().includes(searchField)) ||
		(item.platform_code!==null && item.platform_code.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.zone_id!==null && item.zone_id.toLowerCase().includes(searchField.toLowerCase()))
        );
    });
    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const address = `${config.API}stops-oset-limit?oset=${oset}&limit=${limit}`;
            const res = await axios.get(address);

            /*set state*/
            setAry(res.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
        /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
	/*effect goes here*/
        fetch();
	/*use an empty dependency array to ensure the hook is running only once*/
	/*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, [oset, limit]);
    const handleClickPrev = () => {
        setOset((oset) => (oset > 1 ? --oset : oset));
    };
    const handleClickNext = () => {
        setOset((oset) => ++oset);
    };
    const handleChangeLimit = (event) => {
        setLimit((limit) => event.target.value);
    };
    const handleSearch = (e) => {
        setSearchField(e.target.value);
    };
    return (
        <>
            <Stack direction="horizontal" gap={1} className="m-1">
                <Button variant="secondary" onClick={handleClickPrev} autoFocus>
          prev
                </Button>
                <Button variant="secondary" onClick={handleClickNext}>
          next
                </Button>
		<Select
		    defaultValue={selectOptions[2]}
		    id="stopsLimit"
		    name="stopsLimit"
		    onChange={handleChangeLimit}
		    options={selectOptions}
		/>
		<Input
		    id="stopsSearch"
		    name="stopsSearch"
                    onChange={handleSearch}
                    placeholder="Search table globally"
                    type="search"
                    title="Enter search value"
		    value={searchField}
		/>
            </Stack>
	    <StopsTable aryData={filteredAry} />
        </>
    );
};
export default Stops;
