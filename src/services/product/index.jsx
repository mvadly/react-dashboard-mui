import { clientJwt, clientFormJWT } from '../../util/axios';
import { handleLogout } from '../../util/actions'
import { Start } from '@mui/icons-material';

export const getProducts = async (filter) => {
    try {
        let uri = "search=" + filter.search
        uri += "&page=" + filter.page
        uri += "&perpage=" + filter.perpage
        const response = await clientJwt.get(`${process.env.REACT_APP_APIURL}/v1/products?${uri}`)
        return response
    } catch (error) {
        if (error.response.status === 401) {
            handleLogout()
        }
        return error.response
    }
}


export const addProduct = async (data) => {
    try {
        const comodities = []
        let comodity_id
        if (data.comodity_id.length > 0) {
            data.comodity_id.map((index) => {
                if (index.status) comodities.push(index.field)
            });
            comodity_id = comodities.join(";")
        }

        var formdata = new FormData();
        formdata.append("comodity_id", comodity_id);
        if (data.img_product.length !== 0) {
            formdata.append("img_product", data.img_product);
        }
        formdata.append("product_name", data.product_name);
        formdata.append("price", data.price);
        formdata.append("qty", data.qty);
        formdata.append("qty_price", data.qty_price);
        formdata.append("qty_unit", data.qty_unit);
        const response = await clientFormJWT.post(`${process.env.REACT_APP_APIURL}/v1/product`, formdata)
        return response
    } catch (error) {
        if (error.response !== undefined) {
            if (error.response.status === 401) {
                handleLogout()
            }
            return error.response
        } else {
            return error
        }
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await clientJwt.delete(`${process.env.REACT_APP_APIURL}/v1/products/` + id)
        return response
    } catch (error) {
        if (error.response !== undefined) {
            if (error.response.status === 401) {
                handleLogout()
            }
            return error.response
        } else {
            return error
        }
    }
}
