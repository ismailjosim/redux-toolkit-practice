import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../../api/productAPI';

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const getProducts = createAsyncThunk("products/getProduct", async () => {
    const products = fetchProducts();
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
    }

})

export default productsSlice.reducer;
