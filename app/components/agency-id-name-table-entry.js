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
	    {
		Object.values(tripCalendar).map((value,index)=>{
		    return (
			<th key={index}>{value}</th>
		    );
		})
	    }
        </tr>
    );
};
AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string,
    tripCalendar: PropTypes.object

};
export default AgencyTableEntry;
