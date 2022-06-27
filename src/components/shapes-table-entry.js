import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const TableEntry = ({ shapeId, shapePtLat, shapePtLon, shapePtSequence }) => {
    return (
        <tr>
            <td>{shapeId}</td>
            <td>{shapePtLat}</td>
            <td>{shapePtLon}</td>
            <td>{shapePtSequence}</td>
        </tr>
    );
};

TableEntry.propTypes = {
    shapeId: PropTypes.string,
    shapePtLat: PropTypes.number,
    shapePtLon: PropTypes.number,
    shapePtSequence: PropTypes.number
};

export default TableEntry;
