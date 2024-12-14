import React from 'react';
import '../index.css'
const LowStockAlert = ({ products }) => {
    const lowStock = products.filter(product => product.quantity < 10);

    return (
        <div>
            {lowStock.length > 0 && (
                <div style={{ color: 'red' }} className='lowstockBox'>
                    <h3>Low Stock Alert</h3>
                    <ul>
                        {lowStock.map((product) => (
                            <li key={product.id}>
                                {product.name}: Only {product.quantity} left!
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LowStockAlert;
