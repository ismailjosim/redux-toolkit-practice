import { createReducer } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/productAction';


const initialState = {
  products: [],
  loading: false,
  success: null,
  error: null,
}


const productReducer = createReducer(initialState, builder => {
  // fetch products
  builder.addCase(fetchProducts.pending, (state, action) => {
    state.loading = true;
    state.error = null;
    state.success = null;

  })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
})


export default productReducer;
