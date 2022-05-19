import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceTableEntry extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.time}</td>
                <td>{this.props.tripCount}</td>
            </tr>
        );
    }
}

ServiceTableEntry.propTypes = {
    time: PropTypes.string,
    tripCount: PropTypes.number
};

export default ServiceTableEntry;
