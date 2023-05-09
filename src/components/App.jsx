import { useState } from "react"
import Table from "./Table"
import CustomersDropdownMenu from "./CustomersDropdownMenu"
import BarChart from "./BarChart"

function App() {

  const [customersChart, setCustomersChart] = useState({
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
        customersChart={customersChart}
        setCustomersChart={setCustomersChart}
      />
      <BarChart />
    </>
  )
}

export default App
