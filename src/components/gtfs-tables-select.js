import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
/*controlled component: input form value controlled by React*/
const DropDownSelect = (props) => {
    /*destructuring*/
    const { options, name, onChange, defaultValue } = props;
    if (options) {
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
                <p>Select failed.</p>
            </div>
        );
    }
};

export default DropDownSelect;

DropDownSelect.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};
