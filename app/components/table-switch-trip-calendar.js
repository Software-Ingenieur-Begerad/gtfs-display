import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import TableHead from './agency-id-name-table-head';
import TableEntry from './agency-id-name-table-entry';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitch ({
    tripCalendar,
    agencyId,
    agencyName
}) {
    console.log('TableSwitch agencyId: '+agencyId);
    console.log('TableSwitch agencyName: '+agencyName);
    if(tripCalendar!==undefined){
	console.log('TableSwitch tripCalendar.length: '+Object.keys(tripCalendar).length);
	/*return a React element*/
	return (
        <>
            <Table
		striped
		bordered
		hover
		size="sm"
		variant="dark"
		responsive
	    >
                <thead>
		    <TableHead
			tripCalendar={tripCalendar}
		    />
		</thead>
                <tbody>
		    <TableEntry
			agencyId={agencyId}
			agencyName={agencyName}
			tripCalendar={tripCalendar}
		    />
		</tbody>
            </Table>
        </>
	);
    }else{
	console.log('TableSwitch prop UNDEFINED');
	return <p>Table loading...</p>
    }
}
TableSwitch.propTypes = {
    tripCalendar: PropTypes.object,
    agencyId: PropTypes.string,
    agencyName: PropTypes.string
};
export default TableSwitch;
