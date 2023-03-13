import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ProductCard({ product,
  product: { id, image, title, price },
}) {
    const navigate = useNavigate();
  return (
    <li 
    onClick={() => {navigate(`/products/${id}`, {state: {product}})}}
    className='overflow-hidden cursor-pointer transition-all hover:scale-105'>
      <img className='w-full'src={image} alt={title} />
      <div className='mt-2 px-2 text-base flex flex-col'>
        <h3 className='truncate pb-2'>{title}</h3>
        <p>{`$${price}`}</p>
      </div>
      {/* <p className='mb-2 px-2 text-gray-600'>{category}</p> */}
    </li>
  );
}
