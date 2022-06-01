import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewTable from '../components/overview-table';
//TODO Whats the difference in importing with or without {}?

const Overview = () => {
    /*store data in function component state*/
    /*initialise as empty array*/
    const [overview, setOverview] = useState([]);
    const [agencies, setAgencies] = useState(false);
    const [waitRoutesCount, setWaitRoutesCount] = useState(false);

    const getRoutesCount = async () => {
    /*get route cout for each agency*/
    /*
        const newAryObjs = overview.map((obj) => {
            let agencyId = obj.agency_id;
            //console.log('agencyId: ' + agencyId);
            const resRouteCount = axios.get(
                `https://soll.vbn.de/gtfs/route-count?agencyid=${agencyId}`
            );
            //console.log('count: ' + resRouteCount.data);
            return { ...obj, route_count: resRouteCount.data };
        });
        setOverview((overview) => newAryObjs);
*/

        for (var j = 0; j < overview.length; j++) {
            //console.log('j: ' + j);
            // 1. Make a shallow copy of the objects
            let aryObjs = [...overview];
            ////console.log('aryObjs len: ' + aryObjs.length);
            // 2. Make a shallow copy of the object you want to mutate
            let obj = { ...aryObjs[j] };
            // 3. Replace the property you're intested in
            let routeCount = obj.route_count;
            //console.log('routeCount: ' + routeCount);
            if (routeCount === null) {
                let agencyId = obj.agency_id;
                //console.log('agencyId: ' + agencyId);
                const resRouteCount = await axios.get(
                    `https://soll.vbn.de/gtfs/route-count?agencyid=${agencyId}`
                );
                ////console.log('count: ' + resRouteCount.data);
                obj.route_count = resRouteCount.data;
                routeCount = obj.route_count;
                //console.log('routeCount: ' + routeCount);
                // 4. Put it back into the array. N.B. we *are* mutating the array here, but that's why we made a copy first
                aryObjs[j] = obj;
                // 5. Set the state to the new copy
                setOverview((overview) => aryObjs);
                setWaitRoutesCount((waitRoutesCount) => !waitRoutesCount);
                break;
            }
        }
    };

    const getAgencies = async () => {
        try {
            /*get agencies*/
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
                //console.log('data not available');
            }
            /*set... is an async function and you cannot get the state value immediately after update. Use useEffect hook instead*/
            setAgencies((agencies) => !agencies);
        } catch (err) {
            //console.log('err.message: ' + err.message);
        }
    };

    useEffect(() => {
        if (waitRoutesCount) {
            setWaitRoutesCount((waitRoutesCount) => !waitRoutesCount);
            getRoutesCount();
        }
    }, [waitRoutesCount]);

    /*If you want to get an updated state value then use useEffect hook with dependency array. React will execute this hook after each state update.*/
    useEffect(() => {
    ////console.log('useEffect() agencies: ' + agencies);
        if (agencies) {
            //console.log('agencies available');
            getRoutesCount();
        } else {
            //console.log('agencies not available');
        }
    }, [agencies]);

    /*this hook is run after a DOM update. Changing state might result in an infinite loop*/
    /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
    /*effect goes here*/
        getAgencies();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const ovTable = <OverviewTable overview={overview} />;

    return <>{ovTable}</>;
};
export default Overview;
