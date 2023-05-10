// The component of the Bar Charts

import { useSelector } from "react-redux"
import { Chart as ChartJS } from "chart.js/auto"   // chart.js library for charts
import { Bar } from "react-chartjs-2"              // importing Bar component from chart.js library


function BarChart(props) {

    const data = useSelector((state) => state.data.value)    // Data of the json file

    // Arrays of customers data
    const customer1 = data.transactions.filter((value) => value.customer_id === 1)
    const customer2 = data.transactions.filter((value) => value.customer_id === 2)
    const customer3 = data.transactions.filter((value) => value.customer_id === 3)
    const customer4 = data.transactions.filter((value) => value.customer_id === 4)
    const customer5 = data.transactions.filter((value) => value.customer_id === 5)

    // Objects of customers data to implement it in the charts
    const customerData1 = {
        labels: customer1.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer1.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const customerData2 = {
        labels: customer2.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer2.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const customerData3 = {
        labels: customer3.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer3.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const customerData4 = {
        labels: customer4.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer4.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const customerData5 = {
        labels: customer5.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer5.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    return <section>
       {props.customer1Chart && <Bar data={customerData1} />}
       {props.customer2Chart && <Bar data={customerData2} />}
       {props.customer3Chart && <Bar data={customerData3} />}
       {props.customer4Chart && <Bar data={customerData4} />}
       {props.customer5Chart && <Bar data={customerData5} />}
    </section>
}

export default BarChart