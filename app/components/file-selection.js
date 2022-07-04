import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileSelect from '../components/file-select';
import TablePage from '../components/table-page.js';
const FileSelection = ({ options }) => {
    const defaultGtfsFile = 'Select GTFS file';
    const [gtfsFile, setGtfsFile] = useState(defaultGtfsFile);
    const handleChangeGtfsFile = (event) => {
        setGtfsFile((gtfsFile) => event.target.value);
    };
    if (options.length > 0) {
        return (
            <div>
                <FileSelect
                    name="file"
                    onChange={handleChangeGtfsFile}
                    options={options}
                    defaultValue={defaultGtfsFile}
		    title={defaultGtfsFile}
                />
                <TablePage name={gtfsFile} />
            </div>
        );
    } else {
        return <p>Selection loading...</p>;
    }
};
export default FileSelection;
FileSelection.propTypes = {
    options: PropTypes.array
};
