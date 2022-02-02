function Title({title, icon}) {
    // console.log(title)
    return (
        <div className="bg-white p-3 rounded-md text-gray-700 mb-3">
            <div className="font-bold text-xl">{icon} {title}</div>
        </div>
    )
}

function Body(props) {
    return (
        <div className="bg-white p-3 rounded-md text-gray-700 mb-3">
            <div>{props.content}</div>
        </div>
    )
}

function Pagination({ dataPage, totalData, paginate }) {
    const pageNumbers = []

    for (let index = 1; index <= Math.ceil(totalData / dataPage); index++) {
        pageNumbers.push(index)
    }

    return (

        <nav className="">
            <ul className="flex flex-row gap-2 mt-3">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className="px-3 py-2 bg-orange-400 text-white cursor-pointer"
                        onClick={(e) => {
                            paginate(number);
                        }}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export { Title, Body, Pagination }