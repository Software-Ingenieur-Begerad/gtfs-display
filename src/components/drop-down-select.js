import React from 'react';
import PropTypes from 'prop-types';

/*controlled component: input form value controlled by React*/
const DropDownSelect = (props) => {
    /*destructuring*/
    const { msg, options, name, onChange } = props;
    if (options) {
    //console.log('options len: ' + options.length);
        return (
            <div>
                <strong>{msg}</strong>:
                <select
                    name={name}
                    id={name}
                    className={name}
                    onChange={onChange}
                    autoFocus
                >
                    <option defaultValue>{options[0]}</option>
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
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
    onChange: PropTypes.func,
    options: PropTypes.array,
    msg: PropTypes.string
};
