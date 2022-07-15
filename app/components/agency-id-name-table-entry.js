import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableEntry = ({
    agencyId,
    agencyName
}) => {
    return (
        <tr>
            <td>{agencyId}</td>
            <td>{agencyName}</td>
        </tr>
    );
};
AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string
};
export default AgencyTableEntry;
