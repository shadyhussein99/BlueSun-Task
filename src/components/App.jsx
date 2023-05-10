import { useState } from "react"
import { useSelector } from "react-redux"
import Title from "./Title"
import Table from "./Table"
import CustomersDropdownMenu from "./CustomersDropdownMenu"
import HighestTransactionCustomer from "./HighestTransactionCustomer"
import BarChart from "./BarChart"
import CustomersTotalTransactions from "./CustomersTotalTransactions"

function App() {

  const data = useSelector((state) => state.data.value)    // Data of the json file

  const [customersDetails, setCustomersDetails] = useState({  // State the controls showing the data of the customers when bein selected from the dropdown menu
    customer1: false,
    customer2: false,
    customer3: false,
    customer4: false,
    customer5: false,
  })

  // This function to check if a customer is selected to show the information in the BarChart component 
  const isAnyCustomerSelected = () => {
    return Object.values(customersDetails).some(value => value === true);
  }

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

  return (
    <main className="mx-5 md:mx-12 lg:mx-20">
      <Title />
      <Table />
      <HighestTransactionCustomer
        customerHighestTransaction={customerHighestTransaction}
      />
      <CustomersDropdownMenu
        customersDetails={customersDetails}
        setCustomersDetails={setCustomersDetails}
      />
      {isAnyCustomerSelected() && <BarChart
        customer1Chart={customersDetails.customer1}
        customer2Chart={customersDetails.customer2}
        customer3Chart={customersDetails.customer3}
        customer4Chart={customersDetails.customer4}
        customer5Chart={customersDetails.customer5}
        customersDetails={customersDetails}
        setCustomersDetails={setCustomersDetails}
      />}
      <CustomersTotalTransactions
        customer1Transaction={customersDetails.customer1}
        customer2Transaction={customersDetails.customer2}
        customer3Transaction={customersDetails.customer3}
        customer4Transaction={customersDetails.customer4}
        customer5Transaction={customersDetails.customer5}
        customer1Data={customer1Data}
        customer2Data={customer2Data}
        customer3Data={customer3Data}
        customer4Data={customer4Data}
        customer5Data={customer5Data}
      />
    </main>
  )
}

export default App
