import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
const FileSelect = ({ options, name, onChange, defaultValue, title }) => {
    if (options.length > 0) {
        return (
            <div>
                <Form.Select
                    aria-label="select table entries per page"
                    name={name}
                    id={name}
                    className={name}
                    onChange={onChange}
		    title={title}
                >
                    <option defaultValue>{defaultValue}</option>
                    {options.map((item, index) => (
                        <option key={index} value={item['table_name']}>
                            {item['table_name']}
                        </option>
                    ))}
                </Form.Select>
            </div>
        );
    } else {
        return (
            <div>
                <p>Select loading...</p>
            </div>
        );
    }
};

export default FileSelect;

FileSelect.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    options: PropTypes.array
};
