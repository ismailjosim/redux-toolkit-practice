import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';


//===> Fetch Products
export const fetchProducts = createAsyncThunk('/products', async (products, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/products');
    return data.products;

  } catch (error) {
    return rejectWithValue(error.message);
  }

})


//===> add products
export const addProduct = createAsyncThunk('/product', async (product, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/product', product);
    return data.product;

  } catch (error) {
    return rejectWithValue(error.message);
  }
})
