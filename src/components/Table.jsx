import { useMemo } from 'react';
import ColumnFilter from './ColumnFilter';
import { useTable, useSortBy, useFilters } from 'react-table'
import data from "../data.json";

function Table() {

    const customers = useMemo(() => data.customers, [])
    const transactions = useMemo(() => data.transactions, [])

    const joinData = useMemo(() => {
        return transactions.map((transaction) => {
            const theCustomer = customers.find(
                (value) => value.id === transaction.customer_id
            );
            return {
                ...transaction,
                name: theCustomer.name,
            };
        });
    }, [customers, transactions])



    const columns = useMemo(() => [
        { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
        {
            Header: 'Transaction', columns: [{ Header: 'Amount', accessor: 'amount', Filter: ColumnFilter },
            { Header: 'Date', accessor: 'date', Filter: ColumnFilter },]
        },
    ], [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data: joinData,
        },
        useFilters,
        useSortBy
    );

    return <main>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </span>
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </main>
}

export default Table