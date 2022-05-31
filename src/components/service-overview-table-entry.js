import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceOverviewTableEntry extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.agency}</td>
                <td>{this.props.count}</td>
            </tr>
        );
    }
}

ServiceOverviewTableEntry.propTypes = {
    agency: PropTypes.string,
    count: PropTypes.number
};

export default ServiceOverviewTableEntry;
