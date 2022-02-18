import { useEffect, useState } from 'react';
import { Body } from '../../components/Content';
import { Autocomplete, Grid, TextField } from '@mui/material'
import { Button, Checkbox, GroupCheckbox, Input, Select } from '../../components';
import { addProduct } from '../../services/product';
import { useNavigate } from 'react-router-dom';
import { InputFile } from '../../components/atoms/Input';

const AddProduct = () => {
    const navigate = useNavigate()
    document.title = "Tambah Produk"
    const [product, setProduct] = useState({
        product_name: "",
        qty: 0,
        qty_unit: "",
        price: 0,
        qty_price: "",
        img_product: [],
        img_path:"",
        comodity_id: []
    })

    const [errProduct, setErrProduct] = useState({
        product_name: "",
        qty: "",
        qty_unit: "",
        price: "",
        qty_price: "",
        img_product: "",
        comodity_id: []
    })

    useEffect(() => {

    }, [product])

    const saveProduct = () => {
        addProduct(product).then((res) => {
            if (res.status !== 200) {
                const err = res.data.err
                console.log("err", errProduct)
                setErrProduct(err)
            } else {
                navigate("/products")
                console.log(res)
            }
        })
    }

    return (
        <div>
            <div className="text-lg font-bold mb-3">Tambah Produk Baru</div>
            <Grid container spacing={2}>
                <Grid item md={9}>
                    <Body content={
                        <div className="p-3">
                            <div className="text-lg font-bold mb-3">Detail Produk</div>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input
                                        type="text"
                                        label="Nama Produk"
                                        required={true}
                                        placeholder="Masukan Nama Produk"
                                        value={product.product_name}
                                        onChange={(e) => setProduct({ ...product, product_name: e.target.value })}
                                        errorText={errProduct.product_name}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Input
                                        type="number"
                                        label="Kuantitas"
                                        required={true}
                                        placeholder="Masukkan Kuantitas Produk"
                                        value={parseInt(product.qty)}
                                        onChange={(e) => setProduct({ ...product, qty: parseInt(e.target.value) })}
                                        errorText={errProduct.qty}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Select
                                        title="Satuan Kuantitas"
                                        fullWidth
                                        required
                                        size="small"
                                        value={product.qty_unit}
                                        data={[
                                            { val: "Pcs" },
                                            { val: "Box" },
                                            { val: "Kg" },
                                        ]}
                                        onChange={(e) => setProduct({ ...product, qty_unit: e.target.value })}
                                        errorText={errProduct.qty_unit}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Input
                                        type="number"
                                        label="Harga"
                                        required={true}
                                        placeholder="Masukkan Harga Produk"
                                        value={parseFloat(product.price)}
                                        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                                        errorText={errProduct.price}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Select
                                        title="Satuan Harga"
                                        fullWidth
                                        required
                                        size="small"
                                        value={product.qty_price}
                                        data={[
                                            { val: "per Kilogram" },
                                            { val: "per Liter" },
                                        ]}
                                        onChange={(e) => setProduct({ ...product, qty_price: e.target.value })}
                                        errorText={errProduct.qty_price}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <InputFile
                                        label="Upload Gambar Produk"
                                        required
                                        errorText={errProduct.img_product}
                                        setFileTarget={(file, path) => setProduct({ ...product, img_product: file, img_path: path})} />
                                </Grid>
                            </Grid>
                        </div>
                    } />
                </Grid>

                <Grid item xs={12} md={3}>
                    <div className="">
                        <div className="flex gap-3">
                            <Button type="button" title="Submit" className="btn-primary w-full" onClick={saveProduct} />
                            <Button type="button" title="Batalkan" className="btn-secondary w-full" />
                        </div>
                        <GroupCheckbox
                            data={[
                                { title: "Telur" },
                                { title: "Jagung" },
                                { title: "Ikan" },
                                { title: "Kopi" },
                                { title: "Susu" },
                                { title: "Pakan" },
                                { title: "Minyak Goreng Arab" },
                                { title: "Kopi Susu Pakistan" },
                            ]}
                            className="my-2"
                            setComodities={(e) => setProduct({ ...product, comodity_id: e })}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddProduct;