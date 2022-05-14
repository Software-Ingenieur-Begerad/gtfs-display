import React from 'react';
import PropTypes from 'prop-types';

/*controlled component: input form value controlled by React*/
const FormValue = (props) => {
    /*destructuring*/
    const { value, valueName, onChange, onSubmit } = props;

    return (
    /*one onChange handler for each value*/
    /*input names should match state names*/
        <>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Please enter {valueName}:</p>
                    <input type="text" name="value" value={value} onChange={onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};
export default FormValue;

FormValue.propTypes = {
    value: PropTypes.string,
    valueName: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};
