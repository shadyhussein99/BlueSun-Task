
import { useSelector } from "react-redux"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

function BarChart() {

    const data = useSelector((state) => state.data.value)    // Data of the json file

    const customer1 = data.transactions.filter((value) => value.customer_id === 1)
    const customer2 = data.transactions.filter((value) => value.customer_id === 2)
    const customer3 = data.transactions.filter((value) => value.customer_id === 3)
    const customer4 = data.transactions.filter((value) => value.customer_id === 4)
    const customer5 = data.transactions.filter((value) => value.customer_id === 5)

    const userData1 = {
        labels: customer1.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer1.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const userData2 = {
        labels: customer2.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer2.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const userData3 = {
        labels: customer3.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer3.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const userData4 = {
        labels: customer4.map(value => value.date),
        datasets: [{
            label: "Transactions per day",
            data: customer4.map(value => value.amount),
            backgroundColor: "#50AF95",
            borderWidth: 2,
            borderColor: "black",
        }],
    }

    const userData5 = {
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
        <Bar data={userData1} />
        <Bar data={userData2} />
        <Bar data={userData3} />
        <Bar data={userData4} />
        <Bar data={userData5} />
    </section>
}

export default BarChart