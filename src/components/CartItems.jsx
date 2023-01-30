import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
// import { addOrUpdateToCart, removeFromCart } from '../api/firebase';
import useCart from '../hooks/useCart';

export default function CartItems({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(id);
  };
  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:w-48' src={image} alt={title} />
      <div className='flex-1 flex justify-between'>
        <div className='basis-3/5'>
        <p className='text-lg'>{title}</p>
        <p className='text-xl font-bold text-brand'>{option}</p>
        <p>{price} USD</p>
        </div>
       
        <div className='text-2xl flex items-center'>
          <AiOutlineMinusSquare className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1' onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1' onClick={handlePlus} />
          <RiDeleteBin5Fill className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1' onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
