import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const AgencyTableEntry = ({
    agencyId,
    agencyName,
    agencyUrl,
    agencyTimezone,
    agencyLanguage,
    agencyPhone
}) => {
    return (
        <tr>
            <td>{agencyId}</td>
            <td>{agencyName}</td>
            <td>{agencyUrl}</td>
            <td>{agencyTimezone}</td>
            <td>{agencyLanguage}</td>
            <td>{agencyPhone}</td>
        </tr>
    );
};

AgencyTableEntry.propTypes = {
    agencyId: PropTypes.string,
    agencyName: PropTypes.string,
    agencyUrl: PropTypes.string,
    agencyTimezone: PropTypes.string,
    agencyLanguage: PropTypes.string,
    agencyPhone: PropTypes.string
};

export default AgencyTableEntry;
