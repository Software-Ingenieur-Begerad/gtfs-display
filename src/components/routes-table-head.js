import React from 'react';

const RoutesTableHead = () => {
    return (
        <tr>
            <td>route_id</td>
            <td>agency_id</td>
            <td>route_short_name</td>
            <td>route_long_name</td>
            <td>route_type</td>
            <td>route_color</td>
	    <td>route_text_color</td>
            <td>route_desc</td>
        </tr>
    );
};

export default RoutesTableHead;
