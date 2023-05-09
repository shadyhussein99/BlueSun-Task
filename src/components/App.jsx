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
      <BarChart 
        customer1Chart={customersChart.customer1}
        customer2Chart={customersChart.customer2}
        customer3Chart={customersChart.customer3}
        customer4Chart={customersChart.customer4}
        customer5Chart={customersChart.customer5}
      />
    </>
  )
}

export default App
