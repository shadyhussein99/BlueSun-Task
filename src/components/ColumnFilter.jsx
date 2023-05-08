

function ColumnFilter({ column }) {

    const { filterValue, setFilter } = column

    return <section>
        <span>Search</span>
        <input value={filterValue || ""} onChange={(e) => { setFilter(e.target.value) }} />
    </section>
}

export default ColumnFilter