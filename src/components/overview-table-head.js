import React from 'react';

const OverviewTableHead = () => {
    return (
        <tr>
            <td>Agency</td>
            <td>Route Count</td>
            <td>{new Date().toDateString()}</td>
        </tr>
    );
};

export default OverviewTableHead;
