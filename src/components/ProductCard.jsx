import React from 'react';

const ProductCard = (props) => {
  return (
    <div className='flex flex-col gap-4 px-3 border-2 border-slate-600 w-80 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-black hover:text-white transition-colors duration-300'>
      <img className="mt-2 h-48 w-full object-contain" src={props.img} alt={props.title} />
      {/* Styled Rating */}
      <button className="self-start px-2 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-lg shadow-sm hover:bg-yellow-200">
        {props.rating} ★
      </button>
      <h2 className='line-clamp-1 text-2xl font-bold'>{props.title}</h2>
      <p className="line-clamp-2">{props.description}</p>
      <h3 className="font-bold">{props.catagory}</h3>
      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-xl font-bold'>${props.price}</h3>
        <button
          className='mb-2 text-lg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          onClick={props.addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
