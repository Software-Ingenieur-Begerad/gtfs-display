import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const CalendarDatesTableEntry = ({ serviceId, date, exceptionType }) => {
    return (
        <tr>
            <td>{serviceId}</td>
            <td>{date}</td>
            <td>{exceptionType}</td>
        </tr>
    );
};

CalendarDatesTableEntry.propTypes = {
    serviceId: PropTypes.string,
    date: PropTypes.string,
    exceptionType: PropTypes.number
};

export default CalendarDatesTableEntry;
