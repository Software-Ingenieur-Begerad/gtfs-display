import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import TableHead from './agency-id-name-table-head';
import TableEntry from './agency-id-name-table-entry';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitchBody ({
    tripCalendar,
    agencyId,
    agencyName
}) {
    if(tripCalendar!==undefined &&
       agencyId!==undefined &&
       agencyName!==undefined){
	//console.log('TableSwitchBody agencyId: '+agencyId);
	//console.log('TableSwitchBody agencyName: '+agencyName);
	//console.log('TableSwitchBody tripCalendar.length: '+Object.keys(tripCalendar).length);
	/*return a React element*/
	return (
        <>
                <tbody>
		    <TableEntry
			agencyId={agencyId}
			agencyName={agencyName}
			tripCalendar={tripCalendar}
		    />
		</tbody>
        </>
	);
    }else{
	//console.log('TableSwitchBody waiting for prop');
	return <p>Table Switch Body loading...</p>
    }
}
TableSwitchBody.propTypes = {
    tripCalendar: PropTypes.object,
    agencyId: PropTypes.string,
    agencyName: PropTypes.string
};
export default TableSwitchBody;
