import React, { useState } from 'react';
import ProductList from './components/Product';
import ProductForm from './components/ProductForm';
import LowStockAlert from './components/LowStockAlert';
import { fetchProducts } from './api/firebaseAPI';

const App = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const handleEdit = (product) => {
        setCurrentProduct(product);
    };

    const clearEdit = async () => {
        setCurrentProduct(null);
        const updatedProducts = await fetchProducts();
        setProducts(updatedProducts);
    };

    return (
        <div>
            <LowStockAlert products={products} />
            <ProductForm currentProduct={currentProduct} clearEdit={clearEdit} />
            <ProductList onEdit={handleEdit} />
        </div>
    );
};

export default App;
