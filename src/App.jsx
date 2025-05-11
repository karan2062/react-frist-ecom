import React, { useState } from 'react';
import Header from './components/Navbar';
import Body from './components/MidMain';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]); // State to manage cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <Body addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default App;
