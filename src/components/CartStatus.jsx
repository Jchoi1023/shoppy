import React from 'react';
import {AiOutlineShopping } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  const totalQuantity =
    products && products.reduce((prev, current) => prev + current.quantity, 0);

  return (
    <div className='flex ml-3 mr-1'>
      <AiOutlineShopping className='text-xl' />
      <p>Bag</p>
      {products && <p className='w-5 h-4.5 text-center'>{totalQuantity}</p>}
    </div>
  );
}
