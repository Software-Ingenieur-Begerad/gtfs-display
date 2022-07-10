import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileSelect from '../components/file-select';
import TablePage from '../components/table-page.js';
const FileSelection = ({ options }) => {
    const defaultFile = 'Select file';
    const [fileName, setFileName] = useState(defaultFile);
    const handleChangeFile = (event) => {
        setFileName((fileName) => event.target.value);
    };
    if (options.length > 0) {
        return (
            <div>
                <FileSelect
                    name="file"
                    onChange={handleChangeFile}
                    options={options}
                    defaultValue={defaultFile}
		    title={defaultFile}
                />
                <TablePage name={fileName} />
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
