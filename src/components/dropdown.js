import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => (
    <div className="form-group">
        <strong>{props.name}</strong>
        <select
            className="form-control"
            name="{props.name}"
            onChange={props.onChange}
        >
            <option defaultValue>Select {props.name}</option>
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
