import React from 'react';
import { useTable, Column } from 'react-table';

interface TableProps<T extends Record<string, any>> {
    columns: Column<T>[];  // columns is an arr which is of type Column which takes a type <T> parameter
    data: T[];
    containerClassname: string;
    heading: string;
}

function Table<T extends Record<string, any>>({
    columns,
    data,
    containerClassname,
    heading,
}: TableProps<T>) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className={containerClassname}>
            <h2 className='heading'>{heading}</h2>
            <table className='table' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
