import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewTable from '../components/overview-table';
import config from '../config';
const Overview = () => {
    /*store data in function component state*/
    /*initialise as empty array*/
    const [overview, setOverview] = useState([]);
    const [agencies, setAgencies] = useState(false);
    const [wait, setWait] = useState(false);

    const handleAsyncOps = async (isMounted) => {
    /*get data for each agency*/
        for (var j = 0; j < overview.length; j++) {
            //console.log('j: ' + j);
            let isBreaking = false;
            // 1. Make a shallow copy of the objects
            const aryObjs = [...overview];
            //////console.log('aryObjs len: ' + aryObjs.length);
            // 2. Make a shallow copy of the object you want to mutate
            const obj = { ...aryObjs[j] };
            // 3. Replace the property you're intested in
            const agencyId = obj.agency_id;
            ////console.log('agencyId: ' + agencyId);
            let routeCount = obj.route_count;
            //console.log('routeCount: ' + routeCount);
            if (routeCount === null) {
                const resRouteCount = await axios.get(
                    `${config.api}route-count?agencyid=${agencyId}`
                );
                obj.route_count = resRouteCount.data;
                routeCount = obj.route_count;
                //console.log('routeCount: ' + routeCount);
                isBreaking = true;
            }
            let tripCount = obj.trip_count;
            //console.log('tripCount: ' + tripCount);
            if (tripCount === null) {
                const resTripCount = await axios.get(
                    `${config.api}trip-count?agencyid=${agencyId}`
                );
                obj.trip_count = resTripCount.data;
                tripCount = obj.trip_count;
                //console.log('tripCount: ' + tripCount);
                isBreaking = true;
            }
            // 4. Put it back into the array. N.B. we *are* mutating the array here, but that's why we made a copy first
            aryObjs[j] = obj;
            if (isBreaking && isMounted) {
                // 5. Set the state to the new copy
                setOverview((overview) => aryObjs);
                setWait((wait) => !wait);
                break;
            }
        }
    };

    const getAgencies = async (isMounted) => {
        try {
            /*get agencies*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get(`${config.api}agency-all`);

            let aryOv = res.data;
            for (var i = 0; i < aryOv.length; i++) {
                let agencyId = aryOv[i].agency_id;
                let agencyName = aryOv[i].agency_name;
                let objOvItem = {};
                objOvItem['agency_id'] = agencyId;
                objOvItem['agency_name'] = agencyName;
                objOvItem['route_count'] = null;
                objOvItem['trip_count'] = null;
                objOvItem['day'] = null;

                /*set state*/
                if (isMounted) {
                    setOverview((overview) => [...overview, objOvItem]);
                }
            }

            /*set... is an async function and you cannot get the state value immediately after update. Use useEffect hook instead*/
            setAgencies((agencies) => !agencies);
        } catch (err) {
            ////console.log('err.message: ' + err.message);
        }
    };

    useEffect(() => {
    /*declare let isMounted = true inside useEffect, which will be changed in the cleanup callback, as soon as the component is unmounted. Before state updates, check this variable conditionally.*/
        let isMounted = true;
        if (wait) {
            setWait((wait) => !wait);
            handleAsyncOps(isMounted);
        }
        return () => {
            isMounted = false;
        };
    }, [wait]);

    /*If you want to get an updated state value then use useEffect hook with dependency array. React will execute this hook after each state update.*/
    useEffect(() => {
    /*declare let isMounted = true inside useEffect, which will be changed in the cleanup callback, as soon as the component is unmounted. Before state updates, check this variable conditionally.*/
        let isMounted = true;
        //////console.log('useEffect() agencies: ' + agencies);
        if (agencies) {
            ////console.log('agencies available');
            handleAsyncOps(isMounted);
        } else {
            ////console.log('agencies not available');
        }
        return () => {
            isMounted = false;
        };
    }, [agencies]);

    /*this hook is run after a DOM update. Changing state might result in an infinite loop*/
    /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
    /*declare let isMounted = true inside useEffect, which will be changed in the cleanup callback, as soon as the component is unmounted. Before state updates, check this variable conditionally.*/
        let isMounted = true;

        getAgencies(isMounted);

        return () => {
            isMounted = false;
        };
    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const ovTable = <OverviewTable overview={overview} />;

    return <>{ovTable}</>;
};
export default Overview;
