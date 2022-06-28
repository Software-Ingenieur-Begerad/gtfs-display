import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const PathwaysTableEntry = ({
    pathwayId,
    fromStopId,
    toStopId,
    pathwayMode,
    isBidirectional,
    length,
    traversalTime,
    stairCount,
    maxSlope,
    minWidth,
    signpostedAs,
    reversedSignpostedAs
}) => {
    return (
        <tr>
            <td>{pathwayId}</td>
        </tr>
    );
};

PathwaysTableEntry.propTypes = {
    pathwayId: PropTypes.string,
    fromStopId: PropTypes.string,
    toStopId: PropTypes.string,
    pathwayMode: PropTypes.number,
    isBidirectional: PropTypes.number,
    length: PropTypes.number,
    traversalTime: PropTypes.number,
    stairCount: PropTypes.number,
    maxSlope: PropTypes.number,
    minWidth: PropTypes.number,
    signpostedAs: PropTypes.string,
    reversedSignpostedAs: PropTypes.string
};

export default PathwaysTableEntry;
