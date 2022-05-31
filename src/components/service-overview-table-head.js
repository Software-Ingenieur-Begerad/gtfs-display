import React from 'react';
import TableHeadWeek from './table-head-week';

function ServiceOverviewTableHead () {
    /*element representing user-defined React component*/
    const week = <TableHeadWeek />;

    return (
        <tr>
            <td>Agency</td>
            <td>Route Count</td>
            {week}
        </tr>
    );
}

export default ServiceOverviewTableHead;
