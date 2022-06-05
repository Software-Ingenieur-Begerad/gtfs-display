import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const OverviewTableEntry = ({ agencyName, routeCount, tripCount, day }) => {
    return (
        <tr>
            <td>{agencyName}</td>
            <td>{routeCount === null ? 'loading...' : routeCount}</td>
            <td>{tripCount === null ? 'loading...' : tripCount}</td>
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
