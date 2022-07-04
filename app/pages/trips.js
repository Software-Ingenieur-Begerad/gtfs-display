import React, { useState } from 'react';
import axios from 'axios';
import TripTable from '../components/trips-table';
import FormValue from '../components/form-value';

const Trips = () => {
    /*store route as string*/
    const [route, setRoute] = useState('');

    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            //const msgs = await axios.get('https://soll.vbn.de/gtfs/trips?routeshortname=411'
            const msgs = await axios.get(
                `https://v1gtfs.vbn.api.swingbe.de/trips?routeshortname=${route}`
            );

            /*set state*/
            setMsgs(msgs.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*element representing user-defined React component*/
    const msgTable = <TripTable entries={msgs} />;

    const handleSubmit = () => {
        event.preventDefault();
        getMsgs();
    };

    const handleChange = (e) => {
        setRoute(e.target.value);
    };

    const form = (
        <FormValue
            value={route}
            valueName={'route'}
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );

    return (
        <>
            {form}
            {msgTable}
        </>
    );
};
export default Trips;
