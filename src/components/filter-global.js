import React from 'react';
import PropTypes from 'prop-types';

export default function GlobalFilter ({ filter, setFilter }) {
    return (
        <>
            <p>
                <b>Suche:</b>
                {/*the default value of the input component should be the value of the filter prop.*/}
                {/*if the user writes some text, then invoke the setFilter method.*/}
                <input
                    value={filter || ''}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </p>
        </>
    );
}

GlobalFilter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func
};
