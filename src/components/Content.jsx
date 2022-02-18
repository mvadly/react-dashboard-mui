import { Preview } from "@mui/icons-material"
import { useEffect, useState } from "react"

function Title({ title, icon }) {
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

function Pagination({ currentPage, dataPage, totalData, paginate }) {
    const pageNumbers = []
    const [page, setPage] = useState(currentPage)
    const [pageCount, setPageCount] = useState(Math.ceil(totalData / dataPage))
    for (let index = 1; index <= pageCount; index++) {
        if (index <= 2 || index === pageCount || Math.abs(page - index) <= 1)
            pageNumbers.push(index)
    }
    const paging = (thisPage) =>{
        setPage(thisPage)
        paginate(thisPage)
        console.log(thisPage, "of ", pageCount)
    }
    const prev = () => {
        console.log("prev")
        paging(page > 1 ? page - 1 : 1)
    }

    const next = () => {
        paging(page === pageCount ? page : page + 1)
        console.log("next")
    }


    return (

        <nav className="">
            <ul className="flex flex-row gap-2 mt-3">
                <li className="px-3 py-2 text-white cursor-pointer bg-orange-400" onClick={prev}>Prev</li>
                {pageNumbers.map((number) => {
                    return (
                        <li
                            key={number}
                            className={`px-3 py-2 text-white cursor-pointer ${page === number ? "bg-red-400" : "bg-orange-400"}`}
                            onClick={(e) => paging(number)}>
                            {number}
                        </li>
                    )
                })}
                
                <li className="px-3 py-2 text-white cursor-pointer bg-orange-400" onClick={next}>Next</li>
            </ul>
        </nav>
    )
}

export { Title, Body, Pagination }