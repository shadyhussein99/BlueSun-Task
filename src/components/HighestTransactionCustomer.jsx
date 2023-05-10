

function HighestTransactionCustomer(props) {
    return <section>
        <p>{props.customerHighestTransaction.name} has the highest transaction record with {props.customerHighestTransaction.amount}</p>
    </section>
}

export default HighestTransactionCustomer