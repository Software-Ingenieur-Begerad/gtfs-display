import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const CalendarTableEntry = ({
    serviceId,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    startDate,
    endDate
}) => {
    return (
        <tr>
            <td>{serviceId}</td>
            <td>{monday ? 'true' : 'false'}</td>
            <td>{tuesday ? 'true' : 'false'}</td>
            <td>{wednesday ? 'true' : 'false'}</td>
            <td>{thursday ? 'true' : 'false'}</td>
            <td>{friday ? 'true' : 'false'}</td>
            <td>{saturday ? 'true' : 'false'}</td>
            <td>{sunday ? 'true' : 'false'}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
        </tr>
    );
};

CalendarTableEntry.propTypes = {
    serviceId: PropTypes.string,
    monday: PropTypes.bool,
    tuesday: PropTypes.bool,
    wednesday: PropTypes.bool,
    thursday: PropTypes.bool,
    friday: PropTypes.bool,
    saturday: PropTypes.bool,
    sunday: PropTypes.bool,
    startDate: PropTypes.string,
    endDate: PropTypes.string
};

export default CalendarTableEntry;
