import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DropDownSelect from '../components/drop-down-select';
const selectOptions = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
import ShapesTable from '../components/shapes-table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
//destructure props
const GtfsTable = ({ name }) => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(selectOptions[0]);
    const [ary, setAry] = useState([]);

    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            console.log('name: ' + name);
	    if (name.indexOf(' ') === -1) {
                const address = `https://v1gtfs.vbn.api.swingbe.de/${name}-oset-limit?oset=${oset}&limit=${limit}`;
                console.log('address: ' + address);
                const res = await axios.get(address);
                /*set state*/
                setAry((ary) => res.data);
	    } else {
                console.log('white space');
	    }
        } catch (err) {
            console.log('err.message: ' + err.message);
	    //TODO handle error
            setAry((ary) => []);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        fetch();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, [oset, limit, name]);
    const handleClickPrev = () => {
        setOset((oset) => (oset > 1 ? --oset : oset));
    };
    const handleClickNext = () => {
        setOset((oset) => ++oset);
    };
    const handleChangeLimit = (event) => {
    //console.log('event.target.value: '+event.target.value);
        setLimit((limit) => event.target.value);
    };
    const select = (
        <DropDownSelect
            name="Limit"
            onChange={handleChangeLimit}
            options={selectOptions}
            defaultValue={selectOptions[0]}
        />
    );
    const table = <ShapesTable aryData={ary} />;
    console.log('name: ' + name);
    if (ary.length > 0 && name.indexOf(' ') === -1) {
        console.log('ary && NO white space');
        return (
            <>
                <Stack direction="horizontal" gap={1} className="m-1">
                    <Button variant="secondary" onClick={handleClickPrev}>
          prev
                    </Button>
                    <div className="vr" />
                    {select}
                    <div className="vr" />
                    <Button variant="secondary" onClick={handleClickNext}>
          next
                    </Button>
                </Stack>
                {table}
            </>
        );
    } else {
        console.log('white space');
        return null;
    }
};

GtfsTable.propTypes = {
    name: PropTypes.string
};

export default GtfsTable;
