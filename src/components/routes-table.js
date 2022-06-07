import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleBtn from './toggle-btn';
import TableFilterColumn from './table-filter-column';
import TablePagination from './table-pagination';
import headings from './routes-table-headings';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function RoutesTable (props) {
    //handle state
    const [toggleBtnState, setToggleBtnState] = useState(false);
    /*create headings*/
    const columns = React.useMemo(() => headings, []);

    /*create data*/
    /*updating hooks is done by the dependency array*/
    /*define variables that 'trigger' the change on hooks*/
    const data = React.useMemo(() => props.entries, [props.entries]);

    const toggle = () => {
        setToggleBtnState((toggleBtnState) => !toggleBtnState);
    };
    const toggleBtn = (
        <ToggleBtn
            btnState={toggleBtnState}
            btnFalse="paging"
            btnTrue="all"
            descFalse=": click button to present all routes at once"
            descTrue=": click button to present routes in pages"
            btnOnClick={toggle}
        />
    );

    return (
        <>
            {toggleBtn}
            {props.entries &&
        (toggleBtnState ? (
            <TableFilterColumn columns={columns} data={data} />
        ) : (
            <TablePagination columns={columns} data={data} />
        ))}
        </>
    );
}

RoutesTable.propTypes = {
    entries: PropTypes.array
};

export default RoutesTable;
