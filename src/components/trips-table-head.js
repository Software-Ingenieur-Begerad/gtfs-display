import React from 'react';

const TripsTableHead = () => {
    return (
        <tr>
            <td>route_id</td>
            <td>service_id</td>
            <td>trip_id</td>
            <td>trip_headsign</td>
            <td>trip_short_name</td>
            <td>direction_id</td>
            <td>block_id</td>
            <td>shape_id</td>
            <td>wheelchair_accessible</td>
            <td>bikes_allowed</td>
        </tr>
    );
};

export default TripsTableHead;
