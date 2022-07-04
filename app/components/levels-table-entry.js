import React from 'react';
import PropTypes from 'prop-types';
const LevelsTableEntry = ({ levelId, levelIndex }) => {
    return (
        <tr>
            <td>{levelId}</td>
            <td>{levelIndex}</td>
        </tr>
    );
};
LevelsTableEntry.propTypes = {
    levelId: PropTypes.string,
    levelIndex: PropTypes.number
};
export default LevelsTableEntry;
