import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoutesTable from '../components/routes-table';

const Routes = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get(
                'https://v1gtfs.vbn.api.swingbe.de/routes-all'
            );

            /*set state*/
            setData(res.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getData();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    return (
        <>
            <RoutesTable entries={data} />
        </>
    );
};
export default Routes;
