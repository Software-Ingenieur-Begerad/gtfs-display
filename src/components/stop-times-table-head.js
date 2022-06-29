import React from 'react';

const StopTimesTableHead = () => {
    return (
        <tr>
            <td>trip_id</td>
            <td>arrival_time_hours</td>
            <td>arrival_time_minutes</td>
            <td>departure_time_hours</td>
            <td>departure_time_minutes</td>
            <td>stop_id</td>
            <td>stop_sequence</td>
            <td>pickup_type</td>
            <td>drop_off_type</td>
            <td>stop_headsign</td>
        </tr>
    );
};

export default StopTimesTableHead;
