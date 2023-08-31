import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import useFavorite from '../hooks/useFavorite';
import { useNavigate } from 'react-router-dom';

export default function FavoriteItems({
    product,
    product: { id, image, title, price },
    uid,
  }) {
    const {removeFavoriteItem} = useFavorite();
    const handleDelete = () => {
        removeFavoriteItem.mutate(id);
    }
    const navigate = useNavigate();
  return (
    <li onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className='overflow-hidden cursor-pointer hover:scale-105'>
      <img className='w-full h-5/6' src={image} alt={title} />
      <div className='mt-2 px-2 text-base flex flex-col'>
        <div className='flex items-center justify-between'>
          <h3 className='truncate  pr-5'>{title}</h3>
          <AiFillHeart onClick={handleDelete}/>
        </div>
        <p>{`$${price}`}</p> 
      </div>
    </li>
  );
}
