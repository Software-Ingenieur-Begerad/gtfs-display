import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
/*controlled component: input form value controlled by React*/
const FileSelect = (props) => {
    /*destructuring*/
    const { options, name, onChange, defaultValue } = props;
    console.log('dValue: ' + defaultValue);
    if (options.length > 0) {
        return (
            <div>
                <Form.Select
                    aria-label="select table entries per page"
                    name={name}
                    id={name}
                    className={name}
                    onChange={onChange}
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
    options: PropTypes.array
};
