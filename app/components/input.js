import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
/*controlled component: input form value controlled by React*/
const InputSearch = ({id, name, onChange, placeholder, title, type, value}) => {
    return (
        <>
            <Form.Control
                aria-label={title}
                className={name}
		id={id}
		name={name}
		onChange={onChange}
                placeholder={placeholder}
                title={title}
		type={type}
		value={value}
	    />
        </>
    );
};
export default InputSearch;

InputSearch.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
};
