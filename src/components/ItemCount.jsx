import React from 'react';
import useCart from '../hooks/useCart';

export default function ItemCount() {
  const {
    cartQuery: { data: products },
  } = useCart();

  const totalQuantity =
    products && products.reduce((prev, current) => prev + current.quantity, 0);
  return (
    <div className='flex m-1 mr-1 text-base text-zinc-500'>
      {products && <p className='w-5 h-4.5 text-center'>{totalQuantity}</p>}
      <p className='pl-2'>items</p>
    </div>
  );
}
