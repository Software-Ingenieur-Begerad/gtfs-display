import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnFilter ({ column }) {
    /*extract filterValue, setFilter, preFilteredRows from cloumn*/
    const { filterValue, setFilter, preFilteredRows } = column;
    /*count total number of results*/
    const count = preFilteredRows.length;
    return (
        <input
            value={filterValue || ''}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={`${count} results`}
        />
    );
}

ColumnFilter.propTypes = {
    column: PropTypes.object
};
