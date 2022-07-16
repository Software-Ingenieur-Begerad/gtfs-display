import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCalendarTable from '../components/overview-table';
import config from '../config';
import TablePage from '../components/table-page-trip-calendar.js';
const TripCalendar = () => {
    /*store and initialize data in function component state*/
    const [agencyIds, setAgencyIds] = useState([]);
    const getAgencyIds = async () => {
        try {
            /*get agencyIds*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get(`${config.API}agencyids`);

            let aryAgencyIds = res.data;
	    console.log('TripCalendar aryAgencyIds.length:'+aryAgencyIds.length);
	    setAgencyIds(aryAgencyIds);
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
    };
    /*this hook is run after a DOM update. Changing state might result in an infinite loop*/
    /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
        getAgencyIds();
    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
    if(agencyIds.length > 0){
	return <>
		   <TablePage
		       agencyIds={agencyIds}
		   />
	   </>
    }else{
	return <p>Trip Calendar loading...</p>
    }
};
export default TripCalendar;
