import React from 'react';
import PropTypes from 'prop-types';
const ToggleBtn = (props) => {
    //destructuring
    const { btnState, btnTrue, btnFalse, descTrue, descFalse, btnOnClick } =
    props;
    //render
    return (
        <>
            <button onClick={btnOnClick}>
                {btnState === false ? btnFalse : btnTrue}
            </button>
            {btnState === false ? descFalse : descTrue}
        </>
    );
};
export default ToggleBtn;
ToggleBtn.propTypes = {
    btnState: PropTypes.bool,
    btnTrue: PropTypes.string,
    btnFalse: PropTypes.string,
    descTrue: PropTypes.string,
    descFalse: PropTypes.string,
    btnOnClick: PropTypes.func
};
