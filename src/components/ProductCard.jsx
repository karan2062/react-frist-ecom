import React from 'react';

const ProductCard = (props) => {
  return (
    <div className='flex flex-col gap-4 px-3 border-2 border-slate-600 w-80 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <img className="h-48 w-full object-contain" src={props.img} alt={props.title} />
      <h2 className='line-clamp-1 text-2xl'>{props.title}</h2>
      <p className="line-clamp-2">{props.description}</p>
      <h3>{props.catagory}</h3>
      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-xl font-bold'>${props.price}</h3>
        <button
          className='text-lg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          onClick={props.addToCart} // Call the addToCart function
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
