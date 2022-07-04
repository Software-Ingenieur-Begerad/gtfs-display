import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const TripsTableEntry = ({
    routeId,
    serviceId,
    tripId,
    tripHeadsign,
    tripShortName,
    directionId,
    blockId,
    shapeId,
    wheelchairAccessible,
    bikesAllowed
}) => {
    return (
        <tr>
            <td>{routeId}</td>
            <td>{serviceId}</td>
            <td>{tripId}</td>
            <td>{tripHeadsign}</td>
            <td>{tripShortName}</td>
            <td>{directionId ? 'true' : 'false'}</td>
            <td>{blockId}</td>
            <td>{shapeId}</td>
            <td>{wheelchairAccessible}</td>
            <td>{bikesAllowed}</td>
        </tr>
    );
};

TripsTableEntry.propTypes = {
    routeId: PropTypes.string,
    serviceId: PropTypes.string,
    tripId: PropTypes.string,
    tripHeadsign: PropTypes.string,
    tripShortName: PropTypes.string,
    directionId: PropTypes.bool,
    blockId: PropTypes.string,
    shapeId: PropTypes.string,
    wheelchairAccessible: PropTypes.number,
    bikesAllowed: PropTypes.number
};

export default TripsTableEntry;
