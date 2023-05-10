// The component holding the table

import { useMemo } from 'react';
import { useSelector } from 'react-redux'
import { useTable, useSortBy, useFilters } from 'react-table'  // Using react-table library
import ColumnFilter from './ColumnFilter';

function Table() {

    const data = useSelector((state) => state.data.value)    // Data of the json file

    const customers = data.customers
    const transactions =  data.transactions

    const joinData = useMemo(() => {                        // To make one array holding the whole data to be able to use it as the data array in useTable()
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

    const columns = useMemo(() => [                                // Headers of the table
        { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
        {
            Header: 'Transactions', columns: [
                { Header: 'Amount', accessor: 'amount', Filter: ColumnFilter },
                { Header: 'Date', accessor: 'date', Filter: ColumnFilter}
            ]
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
        <table {...getTableProps()} className='w-full border border-black bg-white'>
            <thead className='border border-black'>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='border border-black'>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className='border border-black align-top text-2xl py-2 xl:text-3xl'>
                                {column.render('Header')}

                                <span className=' text-base'>
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
                        <tr {...row.getRowProps()} className='border border-black font-semibold'>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className=' text-center border border-black py-2 lg:py-3 lg:text-lg'>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </main>
}

export default Table