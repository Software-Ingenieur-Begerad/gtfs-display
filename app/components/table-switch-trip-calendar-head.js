import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableHead from './agency-id-name-table-head';
import TableEntry from './agency-id-name-table-entry';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitchHead ({
    tripCalendar
}) {
    if(tripCalendar!==undefined){
	//console.log('TableSwitchHead tripCalendar.length: '+Object.keys(tripCalendar).length);
	/*return a React element*/
	return (
        <>
                <thead>
		    <TableHead
			tripCalendar={tripCalendar}
		    />
		</thead>
        </>
	);
    }else{
	//console.log('TableSwitchHead waiting for prop');
	return <p>Table Switch Head loading...</p>
    }
}
TableSwitchHead.propTypes = {
    tripCalendar: PropTypes.object
};
export default TableSwitchHead;
