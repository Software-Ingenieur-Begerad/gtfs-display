import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const RoutesTableEntry = ({
    routeId,
    agencyId,
    routeShortName,
    routeLongName,
    routeType,
    routeColor,
    routeTextColor,
    routeDesc
}) => {
    return (
        <tr>
            <td>{routeId}</td>
	    <td>{agencyId}</td>
	    <td>{routeShortName}</td>
	    <td>{routeLongName}</td>
	    <td>{routeType}</td>
	    <td>{routeColor}</td>
	    <td>{routeTextColor}</td>
	    <td>{routeDesc}</td>
        </tr>
    );
};

RoutesTableEntry.propTypes = {
    routeId: PropTypes.string,
    agencyId: PropTypes.string,
    routeShortName: PropTypes.string,
    routeLongName: PropTypes.string,
    routeType: PropTypes.number,
    routeColor: PropTypes.string,
    routeTextColor: PropTypes.string,
    routeDesc: PropTypes.string
};

export default RoutesTableEntry;
