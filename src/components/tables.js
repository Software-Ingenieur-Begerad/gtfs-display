import React from 'react';
import PropTypes from 'prop-types';
import FileSelection from '../components/file-selection';
const Tables = ({ data }) => {
    console.log('data: ' + data.length);
    if (data.length > 0) {
        return (
            <>
                <FileSelection options={data} />
            </>
        );
    } else {
        return <p>Files loading...</p>;
    }
};

export default Tables;

Tables.propTypes = {
    data: PropTypes.array
};
