import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img, name} = props.product;
    // console.log(img);
    return (
        <div className='product'>
            <img src={img} alt="product_image" />
            <h3>{name}</h3>
            <button onClick={() => props.cartHandler(props.product)}>Add to cart</button>
        </div>
    );
};

export default Products;