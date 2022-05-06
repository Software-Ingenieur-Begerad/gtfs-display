import React from 'react';
import PropTypes from 'prop-types';
//import TableFilterColumn from './table-filter-column';
import TablePn from './table-pagination';
import headings from './stops-table-headings';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function StopsTablePn (props) {
    /*create headings*/
    const columns = React.useMemo(() => headings, []);

    /*create data*/
    /*updating hooks is done by the dependency array*/
    /*define variables that 'trigger' the change on hooks*/
    const data = React.useMemo(() => props.entries, [props.entries]);

    return <>{props.entries && <TablePn columns={columns} data={data} />}</>;
}

StopsTablePn.propTypes = {
    entries: PropTypes.array
};

export default StopsTablePn;
