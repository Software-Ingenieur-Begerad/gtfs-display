import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const StopsTableEntry = ({
    stopId,
    stopCode,
    stopName,
    stopDesc,
    stopLat,
    stopLon,
    locationType,
    parentStation,
    wheelchairBoarding,
    platformCode,
    zoneId
}) => {
    return (
        <tr>
            <td>{stopId}</td>
            <td>{stopCode}</td>
            <td>{stopName}</td>
            <td>{stopDesc}</td>
            <td>{stopLat}</td>
            <td>{stopLon}</td>
            <td>{locationType}</td>
            <td>{parentStation}</td>
            <td>{wheelchairBoarding}</td>
            <td>{platformCode}</td>
            <td>{zoneId}</td>
        </tr>
    );
};

StopsTableEntry.propTypes = {
    stopId: PropTypes.string,
    stopCode: PropTypes.string,
    stopName: PropTypes.string,
    stopDesc: PropTypes.string,
    stopLat: PropTypes.number,
    stopLon: PropTypes.number,
    locationType: PropTypes.number,
    parentStation: PropTypes.number,
    wheelchairBoarding: PropTypes.number,
    platformCode: PropTypes.string,
    zoneId: PropTypes.string
};

export default StopsTableEntry;
