import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalFilter, useTable, useFilters } from 'react-table';
import ColumnFilter from './filter-column';
import GlobalFilter from './filter-global';

export default function FilterTableColumn ({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: ColumnFilter
        }),
        []
    );

    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        state, //table state
        setGlobalFilter //applies global filtering to the table.
    } = useTable(
        {
            columns,
            data,
            defaultColumn
            //filterTypes
        },
        useFilters,
        useGlobalFilter
    );
    const { globalFilter } = state;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

FilterTableColumn.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
