import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({
  product,
  product: { id, image, title, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className='overflow-hidden cursor-pointer hover:scale-105'
    >
      <img className='w-full h-5/6' src={image} alt={title} />
      <div className='mt-2 px-2 text-base flex flex-col'>
        <div className='flex justify-between'>
          <h3 className='truncate pb-2'>{title}</h3>
        </div>
        <p>{`$${price}`}</p>
      </div>
    </li>
  );
}
