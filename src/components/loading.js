import React from 'react';
import PropTypes from 'prop-types';

/*the simplest way to define a component is to write a JavaScript function*/
/*Accept a single property object argument*/
function Loading (props) {
    if (props.loading) {
    /*return a React element*/
        return <p>Loading...</p>;
    } else {
        return null;
    }
}

Loading.propTypes = {
    loading: PropTypes.bool
};

export default Loading;
