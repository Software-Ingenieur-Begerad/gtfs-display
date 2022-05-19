import React, { useState } from 'react';
import axios from 'axios';
import ServiceTable from '../components/service-table';
import FormValue from '../components/form-value';

const Service = () => {
    /*store route as string*/
    const [route, setRoute] = useState('');

    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [objService, setObjService] = useState({});

    /*fetch objService in a JavaScript function*/
    const getObjService = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            //const objService = await axios.get('https://soll.vbn.de/gtfs/trips?routeshortname=411'
            let url = `http://localhost:65534/servicedays?routeshortname=${route}`;
            const objService = await axios.get(url);

            /*set state*/
            setObjService(objService.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    const handleSubmit = () => {
        event.preventDefault();
        getObjService();
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

    /*element representing user-defined React component*/
    const msgTable = <ServiceTable service={objService} />;

    return (
        <>
            {form}
            {msgTable}
        </>
    );
};
export default Service;
