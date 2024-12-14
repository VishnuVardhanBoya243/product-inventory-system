import React, { useState } from 'react';
import { addProduct, updateProduct } from '../api/firebaseAPI';
import '../index.css'

const ProductForm = ({ currentProduct, clearEdit }) => {
    const [product, setProduct] = useState(currentProduct || { name: '', description: '', price: '', quantity: '' });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentProduct) {
            await updateProduct(currentProduct.id, product);
        } else {
            await addProduct(product);
        }
        clearEdit();
        location.reload()
    };

    return (
        <form onSubmit={handleSubmit} className='formContainer'>
            <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
            <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
            <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
            <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required type="number" />
            <input name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required type="number" />
            <button type="submit">Save</button>
            {currentProduct && <button onClick={clearEdit}>Cancel</button>}
        </form>
    );
};

export default ProductForm;
