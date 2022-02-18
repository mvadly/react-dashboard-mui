import { Filter } from "@material-ui/icons";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import { SkeletonRowTable } from "../../components";

const List = ({ result, loading }) => {
    const data = result.data !== undefined ? result.data : []

    return (
        <div>
            <table id="table" className="w-full border rounded-tr-lg" style={{ borderRadius: "5px" }}>
                <thead className="bg-blue-800 text-white">
                    <tr >
                        <th className="py-3">
                            #
                        </th>
                        <th className="py-3 border">Nama Produk</th>
                        <th className="py-3 border">Kuantitas</th>
                        <th className="py-3 border">Harga</th>
                        <th className="py-3 border">Status</th>
                        <th className="py-3 border">Komoditas</th>
                        <th className="py-3 border">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <SkeletonRowTable columns={7} /> :
                    (data.length === 0) ?
                        <tr>
                            <td className="text-center py-3" colSpan={7}>Data kosong ...</td>
                        </tr> :
                    
                    data.map((index, key) => (
                        <tr key={key}>
                            <td className="py-3 px-2 border">{index.id}</td>
                            <td className="py-3 px-2 border">{index.product_name}</td>
                            <td className="py-3 px-2 border">{index.qty}</td>
                            <td className="py-3 px-2 border">{index.price}</td>
                            <td className="py-3 px-2 border">{index.status}</td>
                            <td className="py-3 px-2 border">{index.comodity_id}</td>
                            <td className="py-3 px-2 border">{index.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;

