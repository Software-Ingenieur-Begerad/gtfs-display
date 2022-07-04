import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../utils/badge';

const count = ({ count }) => {
    if (count === 0) {
        return <Badge msg={count} modifier={'danger'} />;
    } else {
        return count;
    }
};

count.propTypes = {
    count: PropTypes.number
};

export default count;
