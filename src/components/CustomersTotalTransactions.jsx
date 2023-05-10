// The component of the total transactions of each customer

import { useSelector } from "react-redux"

function CustomersTotalTransactions(props) {

    const data = useSelector((state) => state.data.value)    // Data of the json file

    return <section className=" text-lg font-semibold mb-20">  {/* Used or (||) operator to return the amount directly if the customer made only one transaction as the reduce method returns an object if the array has only one element */}

        {props.customer1Transaction && <p>{data.customers[0].name} total transactions is {props.customer1Data.amount || props.customer1Data}</p>}
        {props.customer2Transaction && <p>{data.customers[1].name} total transactions is {props.customer2Data.amount || props.customer2Data}</p>}
        {props.customer3Transaction && <p>{data.customers[2].name} total transactions is {props.customer3Data.amount || props.customer3Data}</p>}
        {props.customer4Transaction && <p>{data.customers[3].name} total transactions is {props.customer4Data.amount || props.customer4Data}</p>}
        {props.customer5Transaction && <p>{data.customers[4].name} total transactions is {props.customer5Data.amount || props.customer5Data}</p>}

    </section>
}

export default CustomersTotalTransactions