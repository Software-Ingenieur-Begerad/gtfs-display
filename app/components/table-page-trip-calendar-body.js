import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableSwitchBody from './table-switch-trip-calendar-body';
import PropTypes from 'prop-types';
const TablePageBody = ({ agencyIdName }) => {
    if(agencyIdName !== undefined){
	//console.log('TablePageBody agencyIdName:'+JSON.stringify(agencyIdName));
	//console.log('TablePageBody agencyIdName.length:'+agencyIdName.length);
	const agencyId=agencyIdName.agency_id;
	//console.log('TablePageBody agencyId:'+agencyId);
	const agencyName=agencyIdName.agency_name;
	//console.log('TablePageBody agencyName:'+agencyName);
    /*store and initialise data in function component state*/
    const [tripCalendar, setTripCalendar] = useState({});
    const getTripCalendar = async () => {
        try {
            /*get trip calendar*/
	    const address=`https://v1gtfs.vbn.api.swingbe.de/trip-calendar-by-agency-id?agencyid=${agencyId}`;
	    //console.log('address:'+address);
	    /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get(address);

            let aryTripCalendar = res.data;
	    //console.log('aryTripCalendar.length:'+aryTripCalendar.length);
	    setTripCalendar(aryTripCalendar);
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
                <TableSwitchBody
		    tripCalendar={tripCalendar}
		    agencyId={agencyId}
		    agencyName={agencyName}
		/>
            </>
        );
    }else{
	return <p>Table Page Body loading...</p>
    }
};
TablePageBody.propTypes = {
    agencyIdName: PropTypes.object
};
export default TablePageBody;
