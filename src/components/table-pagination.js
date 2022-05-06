import React from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination } from 'react-table';

/*load data set through these props*/
export default function PaginationTable ({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // send props to table
        getTableBodyProps, // send props to table body
        headerGroups, // returns normalized header groups
        page, // fetch the current page  TODO Study!
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow // Prepare the row in order to be displayed (this function needs to be called for each row before getting the row props)
    } = useTable(
        {
            columns,
            data,
            initialState: { pageSize: 10 }
        },
        usePagination
    );

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
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
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous page{' '}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next page{' '}
            </button>
        </div>
    );
}

PaginationTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
