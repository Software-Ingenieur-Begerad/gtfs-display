import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tables from '../components/tables.js';
import config from '../config';
const Files = () => {
    /*store and initialise data in function component state*/
    const [tables, setTables] = useState([]);
    /*fetch data in a JavaScript function*/
    const getTables = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const tables = await axios.get(`${config.API}table-names`);

            /*set state*/
            setTables(tables.data);
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
        /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
	/*effect goes here*/
        getTables();
	/*use an empty dependency array to ensure the hook is running only once*/
	/*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
    if(tables.length>0){
	return (
	    <>
		<Tables data={tables} />
	    </>
	);
    }else{
	return (
	    <>
		<p>Files loading...</p>
	    </>
	);
    }
};
export default Files;
