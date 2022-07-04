import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const TransfersTableEntry = ({
    fromStopId,
    toStopId,
    fromRouteId,
    toRouteId,
    fromTripId,
    toTripId,
    transferType,
    minTransferTime
}) => {
    return (
        <tr>
            <td>{fromStopId}</td>
            <td>{toStopId}</td>
            <td>{fromRouteId}</td>
            <td>{toRouteId}</td>
            <td>{fromTripId}</td>
            <td>{toTripId}</td>
            <td>{transferType}</td>
            <td>{minTransferTime}</td>
        </tr>
    );
};

TransfersTableEntry.propTypes = {
    fromStopId: PropTypes.string,
    toStopId: PropTypes.string,
    fromRouteId: PropTypes.string,
    toRouteId: PropTypes.string,
    fromTripId: PropTypes.string,
    toTripId: PropTypes.string,
    transferType: PropTypes.number,
    minTransferTime: PropTypes.number
};

export default TransfersTableEntry;
