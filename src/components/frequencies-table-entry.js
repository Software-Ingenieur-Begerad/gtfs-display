import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const FrequenciesTableEntry = ({
    tripId,
    startTime,
    endTime,
    headwaySecs,
    exactTimes
}) => {
    return (
        <tr>
            <td>{tripId}</td>
            <td>{startTime}</td>
            <td>{endTime}</td>
            <td>{headwaySecs}</td>
            <td>{exactTimes}</td>
        </tr>
    );
};

FrequenciesTableEntry.propTypes = {
    tripId: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    headwaySecs: PropTypes.number,
    exactTimes: PropTypes.number
};

export default FrequenciesTableEntry;
