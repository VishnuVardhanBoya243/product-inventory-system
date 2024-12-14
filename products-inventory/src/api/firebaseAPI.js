import axios from 'axios';

const API_URL = 'https://productinventory-4bd45-default-rtdb.firebaseio.com/products.json';

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data ? Object.entries(response.data).map(([id, data]) => ({ id, ...data })) : [];
};

export const addProduct = async (product) => {
    await axios.post(API_URL, product);
};

export const updateProduct = async (id, product) => {
    await axios.put(`https://productinventory-4bd45-default-rtdb.firebaseio.com/products/${id}.json`, product);
};

export const deleteProduct = async (id) => {
    await axios.delete(`https://productinventory-4bd45-default-rtdb.firebaseio.com/products/${id}.json`);
};
