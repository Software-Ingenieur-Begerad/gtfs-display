import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceTableEntry extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.count}</td>
            </tr>
        );
    }
}

ServiceTableEntry.propTypes = {
    date: PropTypes.string,
    count: PropTypes.number
};

export default ServiceTableEntry;
