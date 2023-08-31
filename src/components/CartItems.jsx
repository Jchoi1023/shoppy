import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
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
    <li className='flex my-2 items-center '>
      <img className='w-24 md:w-60' src={image} alt={title} />
      <div className='flex'>
        <div className='pl-5 w-20'>
          <p className='text-lg'>{title}</p>
          <p className='text-base'>Size {option}</p>
          <p className='pt-5'>${price}</p>
        </div>
        <div className='pl-20 text-lg flex items-center'>
          <p>Qty: </p>
          <AiOutlineMinusSquare
            className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
            onClick={handleMinus}
          />
          <span>{quantity}</span>
          <AiOutlinePlusSquare
            className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
            onClick={handlePlus}
          />
          <RiDeleteBin5Fill
            className='transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
