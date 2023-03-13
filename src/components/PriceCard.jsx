import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='flex place-content-between bg-gray-50 p-1 text-base md:text-base'>
      <p className='pr-20'>{text}:</p>
      <p className='md:text-base'>${price}</p>
    </div>
  );
}
