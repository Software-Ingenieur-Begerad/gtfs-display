import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableSwitch from './table-switch-trip-calendar';
import PropTypes from 'prop-types';
const TablePage = ({ agencyIds }) => {
    if(agencyIds.length > 0){
    console.log('TablePage agencyIds.length:'+agencyIds.length);
    const agencyId=agencyIds[0].agency_id;
    console.log('TablePage agencyId:'+agencyId);
    const agencyName=agencyIds[0].agency_name;
    console.log('TablePage agencyName:'+agencyName);
    /*store and initialise data in function component state*/
    const [tripCalendar0, setTripCalendar0] = useState({});
    const getTripCalendar = async () => {
        try {
            /*get agencyIds*/
	    const address='https://v1gtfs.vbn.api.swingbe.de/trip-calendar-by-agency-id?agencyid=231';
	    console.log('address:'+address);
	    /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get(address);

            let aryTripCalendar = res.data;
	    console.log('aryTripCalendar.length:'+aryTripCalendar.length);
	    setTripCalendar0(aryTripCalendar);
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
    };
    /*this hook is run after a DOM update. Changing state might result in an infinite loop*/
    /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
        getTripCalendar();
    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
        return (
            <>
                <TableSwitch
		    tripCalendar={tripCalendar0}
		    agencyId={agencyId}
		    agencyName={agencyName}
		/>
            </>
        );
    }else{
	return <p>Table Page loading...</p>
    }
};
TablePage.propTypes = {
    agencyIds: PropTypes.array
};
export default TablePage;
