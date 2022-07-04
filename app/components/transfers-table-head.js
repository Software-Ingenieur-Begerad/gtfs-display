import React from 'react';

const TransfersTableHead = () => {
    return (
        <tr>
            <td>from_stop_id</td>
            <td>to_stop_id</td>
            <td>from_route_id</td>
            <td>to_route_id</td>
            <td>from_trip_id</td>
            <td>to_trip_id</td>
            <td>transfer_type</td>
            <td>min_transfer_time</td>
        </tr>
    );
};

export default TransfersTableHead;
