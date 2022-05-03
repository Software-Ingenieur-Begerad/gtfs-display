import React from 'react';
import PropTypes from 'prop-types';
import TableFilterColumn from './table-filter-column';
import headings from './stops-table-headings';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function StopsTable (props) {
    /*create headings*/
    const columns = React.useMemo(() => headings, []);

    /*create data*/
    /*updating hooks is done by the dependency array*/
    /*define variables that 'trigger' the change on hooks*/
    const data = React.useMemo(() => props.entries, [props.entries]);

    return (
        <>{props.entries && <TableFilterColumn columns={columns} data={data} />}</>
    );
}

StopsTable.propTypes = {
    entries: PropTypes.array
};

export default StopsTable;
