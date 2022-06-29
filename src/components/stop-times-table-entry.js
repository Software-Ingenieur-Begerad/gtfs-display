import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const StopTimesTableEntry = ({
    tripId,
    arrivalTimeHours,
    arrivalTimeMinutes,
    departureTimeHours,
    departureTimeMinutes,
    stopId,
    stopSequence,
    pickupType,
    dropOffType,
    stopHeadsign
}) => {
    return (
        <tr>
            <td>{tripId}</td>
            <td>{arrivalTimeHours}</td>
            <td>{arrivalTimeMinutes}</td>
            <td>{departureTimeHours}</td>
            <td>{departureTimeMinutes}</td>
            <td>{stopId}</td>
            <td>{stopSequence}</td>
            <td>{pickupType}</td>
            <td>{dropOffType}</td>
            <td>{stopHeadsign}</td>
        </tr>
    );
};

StopTimesTableEntry.propTypes = {
    tripId: PropTypes.string,
    arrivalTimeHours: PropTypes.number,
    arrivalTimeMinutes: PropTypes.number,
    departureTimeHours: PropTypes.number,
    departureTimeMinutes: PropTypes.number,
    stopId: PropTypes.string,
    stopSequence: PropTypes.number,
    pickupType: PropTypes.number,
    dropOffType: PropTypes.number,
    stopHeadsign: PropTypes.string
};

export default StopTimesTableEntry;
