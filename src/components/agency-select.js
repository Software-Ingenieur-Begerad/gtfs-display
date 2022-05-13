import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelectAgency">
                {props.name}
            </label>
        </div>
        <select
            className="custom-select"
            id="inputGroupSelectAgency"
            name="{props.name}"
            onChange={props.onChange}
        >
            <option defaultValue>Choose...</option>
            {props.options.map((item, index) => (
                <option key={index} value={item.agency_id}>
                    {item.agency_name}
                </option>
            ))}
        </select>
    </div>
);

Dropdown.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

export default Dropdown;
