import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
/*controlled component: select controlled by React*/
const Select = ({defaultValue, id, name, onChange, options, title}) => {
    if (options) {
        return (
                <Form.Select
                    aria-label="select table entries per page"
                    className={name}
                    defaultValue={defaultValue}
                    name={name}
                    id={id}
                    onChange={onChange}
                    title={title}
                >
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </Form.Select>
        );
    } else {
        return <p>Select options unavailable.</p>;
    }
};
export default Select;
Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.array,
    title: PropTypes.string
};
