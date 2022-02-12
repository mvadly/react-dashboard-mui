import { useState } from 'react';
import { Body } from '../../components/Content';
import { Autocomplete, Grid, TextField } from '@mui/material'

const AddProduct = () => {
    document.title = "Tambah Produk"
    const [product, setProduct] = useState({
        productName: "",
        qty: 0,
    })

    const [errProduct, setErrProduct] = useState({
        productName: "",
        qty: "",
    })
    return (
        <div>
            <div className="text-lg font-bold mb-3">Tambah Produk Baru</div>
            <Body content={
                <div className="p-3">
                    <div className="text-lg font-bold mb-3">Detail Produk</div>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <div className="text-md font-medium mb-3">Nama Produk<sup className="text-red-500">*</sup></div>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Masukkan Nama Produk"
                                value={product.productName}
                                className="bg-white border-0 rounded-md mb-2"
                                variant="outlined"
                                onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                                error={errProduct.productName !== ""}
                            />
                            <div className="text-red-500">{errProduct.productName}</div>
                        </Grid>

                        <Grid item md={6}>
                            <div className="text-md font-medium mb-3">Kuantitas <sup className="text-red-500">*</sup></div>
                            <TextField
                                fullWidth
                                type="number"
                                size="small"
                                placeholder="Masukkan Kuantitas Produk"
                                value={product.qty}
                                className="bg-white border-0 rounded-md mb-2"
                                variant="outlined"
                                onChange={(e) => setProduct({ ...product, qty: e.target.value })}
                                error={errProduct.qty !== ""}
                            />
                            <div className="text-red-500">{errProduct.qty}</div>
                        </Grid>

                        <Grid item md={6}>
                            <div className="text-md font-medium mb-3">Satuan Kuantitas <sup className="text-red-500">*</sup></div>
                            <Autocomplete
                                size="small"
                                options={[
                                    { label: "Pcs" },
                                    { label: "Box" },
                                    { label: "Kg" },
                                ]}
                                sx={{ width: 150 }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <div className="text-red-500">{errProduct.qty}</div>
                        </Grid>
                    </Grid>
                </div>
            } />
        </div>
    );
};

export default AddProduct;