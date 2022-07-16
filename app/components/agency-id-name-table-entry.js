import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableEntry = ({
    agencyId,
    agencyName,
    tripCalendar
}) => {
    return (
        <tr>
            <td>{agencyId}</td>
            <td>{agencyName}</td>
	    {tripCalendar.map((value,index)=>{
		console.log('AgencyTableEntry value:'+value[index]+',index:'+index);
		<td>{value[index]}</td>
	    })}
        </tr>
    );
};
AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string,
    tripCalendar: PropTypes.object

};
export default AgencyTableEntry;
