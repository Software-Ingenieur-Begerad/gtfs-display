import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

const badge = ({ msg, modifier }) => {
    return <Badge bg={modifier}>{msg}</Badge>;
};

badge.propTypes = {
    msg: PropTypes.number,
    modifier: PropTypes.string
};

export default badge;
