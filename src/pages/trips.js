import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripTable from '../components/trips-table';

const Trips = () => {
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            //const msgs = await axios.get('https://soll.vbn.de/gtfs/trips?routeshortname=411'
	    const msgs = await axios.get('http://localhost:65534/trips?routeshortname=411'
            );

            /*set state*/
            setMsgs(msgs.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getMsgs();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const msgTable = <TripTable entries={msgs} />;

    return <>{msgTable}</>;
};
export default Trips;
