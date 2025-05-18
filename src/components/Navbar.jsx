import { useState } from 'react';
import { FaShoppingCart, FaHome, FaInfoCircle, FaPhoneAlt, FaTrash } from 'react-icons/fa'; // Import trash icon
import { Logo_Url } from '../utils/constraint';

const Header = ({ cart, cartCount, setCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility

  // Function to delete an item from the cart
  const deleteItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert('Checkout successful!'); // Replace with actual checkout logic
    setCart([]); // Clear the cart after checkout
  };

  return (
    <header className='flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <img
          src= {Logo_Url}
          alt='Store Logo'
          className='w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300'
        />
        <h1 className='ml-3 text-3xl font-bold'>My Store</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='flex gap-4 space-x-8 text-lg items-center'>
          <li className='flex items-center hover:text-blue-400 transition-colors duration-300'>
            <FaHome className='mr-2' /> {/* Home Icon */}
            <a href='#'>Home</a>
          </li>
          <li className='flex items-center hover:text-blue-400 transition-colors duration-300'>
            <FaInfoCircle className='mr-2' /> {/* About Icon */}
            <a href='#'>About</a>
          </li>
          <li className='flex items-center hover:text-blue-400 transition-colors duration-300'>
            <FaPhoneAlt className='mr-2' /> {/* Contact Icon */}
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>

      {/* Cart Section */}
      <div className='relative'>
        <div
          className='hover:scale-110 transition-transform duration-300 cursor-pointer'
          onClick={() => setIsCartOpen(!isCartOpen)} // Toggle cart visibility
        >
          <FaShoppingCart className='text-3xl' /> {/* Cart Icon */}
        </div>
        <span className='absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-0.5'>
          {cartCount}
        </span>

        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className='absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-4'>
            <h3 className='text-lg font-bold mb-2'>Cart Items</h3>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className='flex justify-between items-center mb-2'>
                    <div className='flex flex-col'>
                      <span>{item.title}</span>
                      <span className='text-sm text-gray-600'>${item.price}</span>
                    </div>
                    <button
                      className='text-red-500 hover:text-red-700'
                      onClick={() => deleteItem(index)} // Delete item
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500'>Your cart is empty.</p>
            )}
            {cart.length > 0 && (
              <button
                className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4'
                onClick={handleCheckout} // Checkout button
              >
                Checkout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;