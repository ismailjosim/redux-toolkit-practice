import axios from '../utils/axios.config';


export const fetchProducts = async () => {
    const data = await axios.get('products');
    return data.data.products;
}

export const postProduct = async (data) => {
    await axios.post("/product", data)

}
