import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from '../components/select';
import {selectOptions} from '../utils/select-options';
import TripsTable from '../components/trips-table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Input from '../components/input';
import config from '../config';
const Trips = () => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(selectOptions[2]);
    const [ary, setAry] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredAry = ary.filter((item, index) => {
        return (
            item.route_id.toLowerCase().includes(searchField.toLowerCase()) ||
		item.service_id.toLowerCase().includes(searchField.toLowerCase()) ||
		item.trip_id.toLowerCase().includes(searchField.toLowerCase()) ||
		(item.trip_headsign!==null && item.trip_headsign.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.trip_short_name!==null && item.trip_short_name.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.direction_id!==null && item.direction_id.toString().includes(searchField)) ||
		(item.block_id!==null && item.block_id.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.shape_id!==null && item.shape_id.toLowerCase().includes(searchField.toLowerCase())) ||
		(item.wheelchair_accessible!==null && item.wheelchair_accessible.toString().includes(searchField)) ||
		(item.bikes_allowed!==null && item.bikes_allowed.toString().includes(searchField))
        );
    });
    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const address = `${config.API}trips-oset-limit?oset=${oset}&limit=${limit}`;
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
		    id="tripsLimit"
		    name="tripsLimit"
		    onChange={handleChangeLimit}
		    options={selectOptions}
		/>
		<Input
		    id="tripsSearch"
		    name="tripsSearch"
                    onChange={handleSearch}
                    placeholder="Search table globally"
                    type="search"
                    title="Enter search value"
		    value={searchField}
		/>
            </Stack>
	    <TripsTable aryData={filteredAry} />
        </>
    );
};
export default Trips;
