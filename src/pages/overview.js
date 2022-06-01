import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewTable from '../components/overview-table';
//TODO Whats the difference in importing with or without {}?

const Overview = () => {
    /*store data in function component state*/
    /*initialise as empty array*/
    const [overview, setOverview] = useState([]);

    /*fetch overview in a JavaScript function*/
    const getOverview = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get('https://soll.vbn.de/gtfs/agency-all');

            if ('data' in res) {
                let aryOv = res.data;
                for (var i = 0; i < aryOv.length; i++) {
                    let agencyId = aryOv[i].agency_id;
                    let agencyName = aryOv[i].agency_name;
                    let objOvItem = {};
                    objOvItem['agency_id'] = agencyId;
                    objOvItem['agency_name'] = agencyName;
                    objOvItem['route_count'] = null;
                    objOvItem['day'] = null;

                    /*set state*/
                    setOverview((overview) => [...overview, objOvItem]);
                }
            } else {
                console.log('data not available');
            }
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getOverview();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const ovTable = <OverviewTable overview={overview} />;

    return <>{ovTable}</>;
};
export default Overview;
