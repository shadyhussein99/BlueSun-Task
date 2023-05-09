// The component of the dropdown menu

import { useState } from "react"
import { useSelector } from "react-redux"

function CustomersDropdownMenu(props) {

    const data = useSelector((state) => state.data.value)    // Data of the json file
    const [toggle, setToggle] = useState(false)

    // The logic used to show the chart of the selected customer only from the dropdown menu
    const handleClick = (index) => {
        if (index === 0) {
            const updatedObject = Object.keys(props.customersChart).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersChart({ ...updatedObject, customer1: true });

        } else if (index === 1) {
            const updatedObject = Object.keys(props.customersChart).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersChart({ ...updatedObject, customer2: true });

        } else if (index === 2) {
            const updatedObject = Object.keys(props.customersChart).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersChart({ ...updatedObject, customer3: true });

        } else if (index === 3) {
            const updatedObject = Object.keys(props.customersChart).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersChart({ ...updatedObject, customer4: true });

        } else if (index === 4) {
            const updatedObject = Object.keys(props.customersChart).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersChart({ ...updatedObject, customer5: true });
        }
    }

    return <div>
        <button onClick={() => { setToggle(!toggle) }}>Show Customers Charts 🔽</button>

        {toggle && (
            <div>
                {data.customers.map((value, index) => {
                    return <button key={value.id} onClick={() => handleClick(index)}>{value.name}</button>
                })}
            </div>
        )}
    </div>
}

export default CustomersDropdownMenu