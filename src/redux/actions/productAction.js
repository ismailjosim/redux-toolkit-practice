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
