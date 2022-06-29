import React, { useEffect, useState } from 'react';
import GtfsFiles from '../components/gtfs-files.js';
import axios from 'axios';
import Tables from '../components/tables.js';
const Homepage = () => {
    /*store and initialise data in function component state*/
    const [tables, setTables] = useState([]);
    /*fetch data in a JavaScript function*/
    const getTables = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const tables = await axios.get(
                'https://v1gtfs.vbn.api.swingbe.de/table-names'
            );

            /*set state*/
            setTables(tables.data);
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getTables();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
    return (
        <>
            <GtfsFiles />
            <Tables data={tables} />
        </>
    );
};
export default Homepage;
