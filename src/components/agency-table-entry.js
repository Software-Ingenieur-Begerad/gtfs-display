import React from 'react';
import PropTypes from 'prop-types';
const AgencyTableEntry = ({
    agencyId,
    agencyName,
    agencyUrl,
    agencyTimezone,
    agencyLang,
    agencyPhone
}) => {
    return (
        <tr>
            <td>{agencyId}</td>
            <td>{agencyName}</td>
            <td>{agencyUrl}</td>
            <td>{agencyTimezone}</td>
            <td>{agencyLang}</td>
            <td>{agencyPhone}</td>
        </tr>
    );
};
AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string,
    agencyUrl: PropTypes.string,
    agencyTimezone: PropTypes.string,
    agencyLang: PropTypes.string,
    agencyPhone: PropTypes.string
};
export default AgencyTableEntry;
