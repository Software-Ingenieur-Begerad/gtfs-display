import React from 'react';

const FrequenciesTableHead = () => {
    return (
        <tr>
            <td>trip_id</td>
            <td>start_time</td>
            <td>end_time</td>
            <td>headway_secs</td>
            <td>exact_times</td>
        </tr>
    );
};

export default FrequenciesTableHead;
