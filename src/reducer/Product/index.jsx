import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        listProduct: [],
    },
    reducers: {
        updateListProduct: (state, action) => {
            state.listProduct = action.payload.listProduct;
        },
    }
})

export const { updateListProduct } = productSlice.actions
export default productSlice.reducer