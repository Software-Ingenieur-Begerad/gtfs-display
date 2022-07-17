import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableEntry = ({
    agencyId,
    agencyName,
    tripCalendar
}) => {
    if(tripCalendar!==undefined && Object.keys(tripCalendar).length>0){
	return (
            <tr>
		<td>{agencyId}</td>
		<td>{agencyName}</td>
		{
		Object.values(tripCalendar).map((value,index)=>{
		    return (
			<th key={index}>{value}</th>
		    );
		})
		}
            </tr>
	);
    }else{
	//console.log('AgencyTableEntry waiting for prop');
	return (
            <tr>
		<th>Table Body loading...</th>
            </tr>
	);
    }
};
AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string,
    tripCalendar: PropTypes.object

};
export default AgencyTableEntry;
