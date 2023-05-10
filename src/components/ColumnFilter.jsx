// The component used to filter the columns of the table

function ColumnFilter({ column }) {

    const { filterValue, setFilter } = column

    return <section>
        <span className="block font-normal text-base lg:text-lg">Search</span>
        <input value={filterValue || ""} onChange={(e) => { setFilter(e.target.value) }} className=" w-24 border border-black mb-2 rounded-md px-2 py-1 font-normal text-base text-black lg:w-28 xl:w-52"/>
    </section>
}

export default ColumnFilter