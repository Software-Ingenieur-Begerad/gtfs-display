import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableHead = ({
    tripCalendar
}) => {
    const handleTs=(ts)=>{
	//console.log(`AgencyTableHead ts: ${ts}`);
	const date=new Date(parseInt(ts,10));
	//console.log(`AgencyTableHead date: ${date}`);
	//return date.toString();
	//return date.toISOString().split('T')[0]
	return date.toLocaleDateString();
    };
    if(tripCalendar!==undefined && Object.keys(tripCalendar).length>0){
	//console.log('AgencyTableHead tripCalendar.length: '+Object.keys(tripCalendar).length);
	return (
        <tr>
            <th>agency_id</th>
            <th>agency_name</th>
	    {
		Object.keys(tripCalendar).map((key,index)=>{
		    return (
			<th key={index}>{handleTs(key)}</th>
		    );
		})
	    }
        </tr>
	);
    }else{
	//console.log('AgencyTableHead waiting for prop');
	return (
        <tr>
            <th>Table Head loading...</th>
        </tr>
	);
    }
};
AgencyTableHead.propTypes = {
    tripCalendar: PropTypes.object
};
export default AgencyTableHead;
