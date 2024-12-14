import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api/firebaseAPI';
import '../index.css'

const ProductList = ({ onEdit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className='productList'>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: '10px' }}>
                        <b>{product.name}</b>: {product.description} - ${product.price} ({product.quantity} in stock)
                        <button onClick={() => onEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
