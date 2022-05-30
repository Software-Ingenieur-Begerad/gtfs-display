import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceOverviewTable from '../components/service-overview-table';
import Loading from '../components/loading';
//TODO Whats the difference in importing with or without {}?

const Service = () => {
    /*store route as string*/
    const [render, setRender] = useState(false);
    const [loading, setLoading] = useState(false);
    const [objService, setObjService] = useState({});

    /*fetch objService in a JavaScript function*/
    const getObjService = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            let url = 'https://soll.vbn.de/gtfs/service-overview';
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

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getObjService();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const msgTable = (
        <ServiceOverviewTable render={render} service={objService} />
    );

    return (
        <>
            <Loading loading={loading} />
            {msgTable}
        </>
    );
};
export default Service;
