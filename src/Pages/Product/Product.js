import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Home/Products/Products';

const Product = () => {

    const product =useLoaderData();
    
    return (
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                product.map(products =><Products
                key={products.id}
                products={products}
                ></Products>)
            }
        </div>
    );
};

export default Product;