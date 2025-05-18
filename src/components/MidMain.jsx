import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../utils/ProductData';
import { useState, useEffect } from 'react';
import Skeleton from './Skelation';

const Body = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setTopRatedProducts(productsData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const topRatedProductsData = () => {
    setLoading(true);
    setTimeout(() => {
      setTopRatedProducts(productsData.filter((product) => product.rating.rate >= 4));
      setLoading(false);
    }, 1000);
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredProducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
      );
      setTopRatedProducts(filteredProducts);
      setLoading(false);
    }, 1000);
  };

  const renderSkeletons = () => {
    return Array(20).fill(null).map((_, index) => (
      <div key={index} className="w-64 p-4 border rounded-lg shadow-sm">
        <Skeleton width="100%" height="200px" className="mb-4" />
        <Skeleton width="80%" height="20px" className="mb-2" />
        <Skeleton width="60%" height="16px" className="mb-2" />
        <Skeleton width="40%" height="16px" className="mb-2" />
        <Skeleton width="30%" height="20px" />
      </div>
    ));
  };

  return (
    <>
      <section className='flex flex-col gap-4 px-2 py-2 border-2 border-red-500'>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
            placeholder='Search...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button 
            className='px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            onClick={handleSearch}
            disabled={loading}
          >
            Search
          </button>
          <button 
            className='px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' 
            onClick={topRatedProductsData}
            disabled={loading}
          >
            Top Rated
          </button>
        </div>
        <div className='flex flex-wrap justify-center gap-4 product-items'>
          {loading ? (
            renderSkeletons()
          ) : (
            topRatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                description={product.description}
                catagory={product.category}
                price={product.price}
                rating={product.rating.rate}
                onAddToCart={() => addToCart(product)}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Body;
