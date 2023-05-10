

function HighestTransactionCustomer(props) {
    return <section className="my-7 text-center lg:text-xl lg:my-12">
        <p>⭐<span className="text-xl font-semibold">{props.customerHighestTransaction.name}</span> has the highest transaction record with {props.customerHighestTransaction.amount} total transactions</p>
    </section>
}

export default HighestTransactionCustomer