import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StopTable from '../components/stop-table';

const Stops = () => {
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*allow cross origin restest*/
            /*TODO make port available using config*/
            axios.defaults.baseURL = 'http://localhost:65534';
            axios.defaults.headers.get['Content-Type'] =
        'application/json;charset=utf-8';
            axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
            axios.defaults.headers.get['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.get['Access-Control-Allow-Methods'] = 'GET';
            axios.defaults.headers.get['Access-Control-Max-Age'] = 86400;

            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const msgs = await axios.get('stops-all');

            /*set state*/
            /*NOTE route /agency consist of a data and a meta object*/
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
    const msgTable = <StopTable entries={msgs} />;

    return <>{msgTable}</>;
};
export default Stops;
