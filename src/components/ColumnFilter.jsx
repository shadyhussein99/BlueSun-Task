// The component used to filter the columns of the table

function ColumnFilter({ column }) {

    const { filterValue, setFilter } = column

    return <section>
        <span className="block font-normal text-base">Search</span>
        <input value={filterValue || ""} onChange={(e) => { setFilter(e.target.value) }} className=" w-24 border border-black mb-2 rounded-md px-2 font-normal text-base"/>
    </section>
}

export default ColumnFilter