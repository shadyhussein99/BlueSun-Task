import { useState } from "react"
import Table from "./Table"
import CustomersDropdownMenu from "./CustomersDropdownMenu"
import BarChart from "./BarChart"
import CustomersTotalTransactions from "./CustomersTotalTransactions"

function App() {

  const [customersDetails, setCustomersDetails] = useState({
    customer1: false,
    customer2: false,
    customer3: false,
    customer4: false,
    customer5: false,
  })

  return (
    <>
      <Table />
      <CustomersDropdownMenu
        customersDetails={customersDetails}
        setCustomersDetails={setCustomersDetails}
      />
      <BarChart
        customer1Chart={customersDetails.customer1}
        customer2Chart={customersDetails.customer2}
        customer3Chart={customersDetails.customer3}
        customer4Chart={customersDetails.customer4}
        customer5Chart={customersDetails.customer5}
      />
      <CustomersTotalTransactions
        customer1Transaction={customersDetails.customer1}
        customer2Transaction={customersDetails.customer2}
        customer3Transaction={customersDetails.customer3}
        customer4Transaction={customersDetails.customer4}
        customer5Transaction={customersDetails.customer5}
      />
    </>
  )
}

export default App
