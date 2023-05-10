// The component of the dropdown menu

import { useState } from "react"
import { useSelector } from "react-redux"

function CustomersDropdownMenu(props) {

    const data = useSelector((state) => state.data.value)    // Data of the json file
    const [toggle, setToggle] = useState(false)

    // The logic used to show the chart of the selected customer only from the dropdown menu
    const handleClick = (index) => {
        if (index === 0) {
            const updatedObject = Object.keys(props.customersDetails).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersDetails({ ...updatedObject, customer1: true });

        } else if (index === 1) {
            const updatedObject = Object.keys(props.customersDetails).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersDetails({ ...updatedObject, customer2: true });

        } else if (index === 2) {
            const updatedObject = Object.keys(props.customersDetails).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersDetails({ ...updatedObject, customer3: true });

        } else if (index === 3) {
            const updatedObject = Object.keys(props.customersDetails).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersDetails({ ...updatedObject, customer4: true });

        } else if (index === 4) {
            const updatedObject = Object.keys(props.customersDetails).reduce((acc, curr) => {
                acc[curr] = false;
                return acc;
            }, {});
            props.setCustomersDetails({ ...updatedObject, customer5: true });
        }
        setToggle(!toggle)
    }


    return <section>
        <div className="flex justify-center">
            <button onClick={() => { setToggle(!toggle) }} className="bg-white p-4 rounded-xl text-lg font-semibold hover:bg-slate-100">Show Customers Charts 🔽</button>
        </div>

        {toggle && (
            <div className="bg-white w-64 mx-auto rounded-xl text-center">
                {data.customers.map((value, index) => {
                    return <p key={value.id} onClick={() => handleClick(index)} className=" font-semibold hover:bg-slate-200 cursor-pointer lg:py-2">{value.name}</p>
                })}
            </div>
        )}
    </section>
}

export default CustomersDropdownMenu