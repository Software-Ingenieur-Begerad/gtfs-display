import React from 'react';
import PropTypes from 'prop-types';
import FileSelection from './file-selection';
const Tables = ({ data }) => {
    //console.log('Tables data.length: '+data.length);
    if (data.length > 0) {
        return (
            <>
                <FileSelection options={data} />
            </>
        );
    } else {
        return <p>Selection loading...</p>;
    }
};
Tables.propTypes = {
    data: PropTypes.array
};
export default Tables;
