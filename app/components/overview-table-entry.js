import React from 'react';
import PropTypes from 'prop-types';
import Count from './overview-table-count.js';

/*destructure props object*/
const OverviewTableEntry = ({ agencyName, routeCount, tripCount, day }) => {
    const routeCountBadge = <Count count={routeCount} />;
    const tripCountBadge = <Count count={tripCount} />;
    return (
        <tr>
            <td>{agencyName}</td>
            <td>{routeCount === null ? 'loading...' : routeCountBadge}</td>
            <td>{tripCount === null ? 'loading...' : tripCountBadge}</td>
            <td>{day === null ? 'loading...' : day}</td>
        </tr>
    );
};

OverviewTableEntry.propTypes = {
    agencyName: PropTypes.string,
    routeCount: PropTypes.number,
    tripCount: PropTypes.number,
    day: PropTypes.object
};

export default OverviewTableEntry;
