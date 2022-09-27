import React, {useEffect, useState} from 'react';
import './App.css';
import Products from './components/Products/Products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.log(err));
  }, []);

  const cartHandler = (obj) => {
    if(cart) {
      const newCart = [...cart, obj];
      setCart(newCart);
    }
  };
  // console.log(cart);

  return (
    <div className='App'>
      <div className='left'>
        {
          products.map(product => <Products
            key={product.id}
            product={product}
            cartHandler={cartHandler}
          ></Products>)
        }
      </div>
      <div className='right'>
        <h2>Selected Item</h2>
        {
          cart.map(item => <li>{item.name}</li>)
        }
      </div>
    </div>
  );
};

export default App;