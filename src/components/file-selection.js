import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileSelect from '../components/file-select';
import TablePage from '../components/table-page.js';
/*controlled component: input form value controlled by React*/
const FileSelection = ({ options }) => {
    const defaultGtfsFile = 'Select file';
    /*store and initialise data in function component state*/
    const [gtfsFile, setGtfsFile] = useState(defaultGtfsFile);
    const handleChangeGtfsFile = (event) => {
        setGtfsFile((gtfsFile) => event.target.value);
    };
    const select = (
        <FileSelect
            name="File"
            onChange={handleChangeGtfsFile}
            options={options}
            defaultValue={defaultGtfsFile}
        />
    );
    if (options.length > 0) {
        return (
            <div>
                {select}
                <TablePage name={gtfsFile} />
            </div>
        );
    } else {
        return (
            <div>
                <p>Selection loading...</p>
            </div>
        );
    }
};

export default FileSelection;

FileSelection.propTypes = {
    options: PropTypes.array
};
