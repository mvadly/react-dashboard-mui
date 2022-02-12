import { Search } from '@material-ui/icons';
import { Autocomplete, Grid, InputAdornment, TextField, Checkbox } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Body } from '../../components/Content';

const Product = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const komoditas = [
        { label: 'Telur Ayam', year: 1994 },
        { label: 'Beras', year: 1972 },
        { label: 'Minyak Goreng', year: 1974 }
    ]
    if (loading) return "Loading..."
    return (
        <div>
            <div className="flex gap-3 mb-3 items-center">
                <div className="text-lg font-bold">Produk</div>
                <Link to="/products/add" className="bg-orange-500 rounded text-white hover:bg-orange-600 py-2 px-2">
                    Tambah Produk
                </Link>
                <button className="border border-orange-500 rounded text-orange-500 py-2 px-2 hover:text-white hover:bg-orange-500">
                    Download
                </button>
            </div>
            <Body content={
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <div className="m-2 p-6 bg-blue-100 rounded-lg">
                                <div className="text-md">Jumlah Seluruh Produk</div>
                                <div className="text-2xl font-bold mt-3">54</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="m-2 p-6 bg-green-100 rounded-lg">
                                <div className="text-md">Disetujui</div>
                                <div className="text-2xl font-bold mt-3 text-green-700">50</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="m-2 p-6 bg-red-100 rounded-lg">
                                <div className="text-md">Ditolak</div>
                                <div className="text-2xl font-bold mt-3 text-red-700">1</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="m-2 p-6 bg-yellow-100 rounded-lg">
                                <div className="text-md">Dalam Proses</div>
                                <div className="text-2xl font-bold mt-3">3</div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container space={2}>
                        <Grid item xs={12} md={6}>
                            <div className="flex m-2 gap-2 pt-2">
                                <Autocomplete
                                    size="small"
                                    options={komoditas}
                                    sx={{ width: 220 }}
                                    renderInput={(params) => <TextField {...params} label="Komoditas" />}
                                />

                                <Autocomplete
                                    size="small"
                                    options={[
                                        { label: "Disetujui" },
                                        { label: "Dalam Proses" },
                                        { label: "Ditolak" },
                                    ]}
                                    sx={{ width: 150 }}
                                    renderInput={(params) => <TextField {...params} label="Status" />}
                                />

                                <button
                                    className="border border-blue-400 py-1 rounded px-3 hover:bg-blue-400 hover:text-white text-ellipsis">Terapkan Filter</button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="m-2 gap-2 pt-2 flex justify-end">
                                <TextField
                                    fullWidth
                                    placeholder="Cari nama petani..."
                                    type="text"
                                    size="small"
                                    className="bg-white border-0 rounded-md"
                                    sx={{ width: 400 }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </Grid>

                        {/* Table */}
                        <Grid item md={12}>
                            <div className="m-2 pt-2">
                                <table className="w-full border rounded-tr-lg" style={{borderRadius:"5px"}}>
                                    <thead className="bg-blue-800 text-white">
                                        <tr >
                                            <th className="py-3">
                                                <Checkbox defaultChecked={false}  />
                                            </th>
                                            <th className="py-3">Nama Produk</th>
                                            <th className="py-3">Kuantitas</th>
                                            <th className="py-3">Harga</th>
                                            <th className="py-3">Status</th>
                                            <th className="py-3">Komoditas</th>
                                            <th className="py-3">Tanggal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((index, key)=>(
                                            <tr key={key}>
                                                <td><Checkbox defaultChecked={false}  /></td>
                                                <td>{index.product_name}</td>
                                                <td>{index.qty}</td>
                                                <td>{index.price}</td>
                                                <td>{index.status_name}</td>
                                                <td>{index.comodity_name}</td>
                                                <td>{index.created_at}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            } />
        </div>
    );
};

export default Product;