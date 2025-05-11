import { FaShoppingCart, FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const Header = ({ cartCount }) => {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <img
          src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211'
          alt='Store Logo'
          className='w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300'
        />
        <h1 className='ml-3 text-3xl font-bold'>My Store</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='flex space-x-8 text-lg items-center'>
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
        <div className='hover:scale-110 transition-transform duration-300 cursor-pointer'>
          <FaShoppingCart className='text-3xl' /> {/* Cart Icon */}
        </div>
        <span className='absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-0.5'>
          {cartCount}
        </span>
      </div>
    </header>
  );
};

export default Header;