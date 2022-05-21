import React, { useState } from 'react';
import axios from 'axios';
import ServiceTable from '../components/service-table';
import FormValue from '../components/form-value';
import Loading from '../components/loading';

const Service = () => {
    /*store route as string*/
    const [route, setRoute] = useState('');

    const [render, setRender] = useState(false);
    const [loading, setLoading] = useState(false);
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [objService, setObjService] = useState({});

    /*fetch objService in a JavaScript function*/
    const getObjService = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            let url = `https://soll.vbn.de/gtfs/servicedays?routeshortname=${route}`;
            setLoading(true);
            const objService = await axios.get(url);
            setLoading(false);
            setRender(true);

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

    /*element representing user-defined React component*/
    const msgTable = <ServiceTable render={render} service={objService} />;

    return (
        <>
            <FormValue
                value={route}
                valueName={'route'}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
            <Loading loading={loading} />
            {msgTable}
        </>
    );
};
export default Service;
