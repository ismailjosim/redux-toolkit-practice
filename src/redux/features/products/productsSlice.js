import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, postProduct } from '../../../api/productAPI';

const initialState = {
    products: [],
    isLoading: false,
    success: false,
    isError: false,
    error: ''
}


export const getProducts = createAsyncThunk("products/getProduct", async () => {
    const products = fetchProducts();
    return products;

})
export const addProduct = createAsyncThunk("products/addProduct", async (data) => {
    const products = postProduct(data);
    return products;

})



const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })

        // Add new product
        builder
            .addCase(addProduct.pending, (state, action) => {
                state.isLoading = true;
                state.success = false;
                state.isError = false;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.success = true;
                state.products = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })
    }

})

export default productsSlice.reducer;
