// The component of the total transactions of each customer

import { useSelector } from "react-redux"

function CustomersTotalTransactions(props) {

    const data = useSelector((state) => state.data.value)    // Data of the json file

    // Total transactions of each customer
    const customer1Data = data.transactions.filter((value) => value.customer_id === 1).reduce((curr, acc) => { return curr.amount + acc.amount })
    const customer2Data = data.transactions.filter((value) => value.customer_id === 2).reduce((curr, acc) => { return curr.amount + acc.amount })
    const customer3Data = data.transactions.filter((value) => value.customer_id === 3).reduce((curr, acc) => { return curr.amount + acc.amount })
    const customer4Data = data.transactions.filter((value) => value.customer_id === 4).reduce((curr, acc) => { return curr.amount + acc.amount })
    const customer5Data = data.transactions.filter((value) => value.customer_id === 5).reduce((curr, acc) => { return curr.amount + acc.amount })

    // This helps in making an array of objects with the name and total amount properties to be able to indicate the customer with max transactions
    const groupedTransactions = data.transactions.reduce((acc, transaction) => {
        const { customer_id, amount } = transaction;
        if (!acc[customer_id]) acc[customer_id] = 0;
        acc[customer_id] += amount;
        return acc;
    }, {});

    const totalCustomersTransactions = data.customers.map(({ id, name }) => ({
        name,
        amount: groupedTransactions[id] || 0,
    }));

    // Used or (||) operator to return the amount directly if the customer made only one transaction as the reduce method returns an object if the array has only one element 
    const maxTransaction = Math.max(customer1Data.amount || customer1Data, customer2Data.amount || customer2Data, customer3Data.amount || customer3Data, customer4Data.amount || customer4Data, customer5Data.amount || customer5Data)

    const customerHighestTransaction = totalCustomersTransactions.find((value) => value.amount === maxTransaction)

    return <section>

        {props.customer1Transaction && <p>{data.customers[0].name} total transactions is {customer1Data.amount || customer1Data}</p>}
        {props.customer2Transaction && <p>{data.customers[1].name} total transactions is {customer2Data.amount || customer2Data}</p>}
        {props.customer3Transaction && <p>{data.customers[2].name} total transactions is {customer3Data.amount || customer3Data}</p>}
        {props.customer4Transaction && <p>{data.customers[3].name} total transactions is {customer4Data.amount || customer4Data}</p>}
        {props.customer5Transaction && <p>{data.customers[4].name} total transactions is {customer5Data.amount || customer5Data}</p>}

        <p>{customerHighestTransaction.name} has the highest teansaction record with {customerHighestTransaction.amount}</p>

    </section>
}

export default CustomersTotalTransactions