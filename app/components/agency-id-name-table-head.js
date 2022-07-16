import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableHead = ({
    tripCalendar
}) => {
    if(tripCalendar!==undefined){
	console.log('AgencyTableHead tripCalendar.length: '+Object.keys(tripCalendar).length);
	return (
        <tr>
            <th>agency_id</th>
            <th>agency_name</th>
	    {tripCalendar.map((value,index)=>{
		console.log('AgencyTableHead value:'+value[index]+',index:'+index);
		<th>{value[index]}</th>
	    })}
        </tr>
	);
    }else{
	console.log('AgencyTableHead tripCalendar UNDEFINED');
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
