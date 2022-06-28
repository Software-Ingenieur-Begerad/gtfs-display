import React from 'react';

const StopsTableHead = () => {
    return (
        <tr>
            <td>stop_id</td>
            <td>stop_code</td>
            <td>stop_name</td>
            <td>stop_desc</td>
            <td>stop_lat</td>
            <td>stop_lon</td>
            <td>location_type</td>
            <td>parent_station</td>
            <td>whelchair_boarding</td>
            <td>platform_code</td>
            <td>zone_id</td>
        </tr>
    );
};

export default StopsTableHead;
