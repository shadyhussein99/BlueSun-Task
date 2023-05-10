

function HighestTransactionCustomer(props) {
    return <section className="my-7">
        <p>⭐<span className="text-xl font-semibold">{props.customerHighestTransaction.name}</span> has the highest transaction record with {props.customerHighestTransaction.amount}</p>
    </section>
}

export default HighestTransactionCustomer