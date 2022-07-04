import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from '../components/select';
import {selectOptions} from '../utils/select-options';
import AgencyTable from '../components/agency-table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import InputSearch from '../components/input-search';
const Agency = () => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(selectOptions[2]);
    const [ary, setAry] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredAry = ary.filter((item, index) => {
        return (
            item.agency_id.toLowerCase().includes(searchField.toLowerCase()) ||
            item.agency_name.toLowerCase().includes(searchField.toLowerCase()) ||
            item.agency_url.toLowerCase().includes(searchField.toLowerCase()) ||
            item.agency_timezone.toLowerCase().includes(searchField.toLowerCase()) ||
            item.agency_lang.toLowerCase().includes(searchField.toLowerCase()) ||
            item.agency_phone.toLowerCase().includes(searchField.toLowerCase())
        );
    });
    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const address = `https://v1gtfs.vbn.api.swingbe.de/agency-oset-limit?oset=${oset}&limit=${limit}`;
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
		    id="shapesLimit"
		    name="shapesLimit"
		    onChange={handleChangeLimit}
		    options={selectOptions}
		/>
		<InputSearch
		    id="shapesSearch"
		    name="shapesSearch"
                    onChange={handleSearch}
                    placeholder="Search table globally"
                    type="search"
                    title="Enter search value"
		    value={searchField}
		/>
            </Stack>
	    <AgencyTable aryData={filteredAry} />
        </>
    );
};
export default Agency;
