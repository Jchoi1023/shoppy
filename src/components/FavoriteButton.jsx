import React from 'react';
import { AiOutlineHeart} from 'react-icons/ai';
import useFavorite from '../hooks/useFavorite';
import { useLocation } from 'react-router-dom';

export default function FavoriteButton() {
  const { addFavoriteItem } = useFavorite();
  const {
    state: {
      product: { id, image, title, price},
    },
  } = useLocation();

  const handleAdd = (e) => {
    const product = { id, image, title, price };
    addFavoriteItem.mutate(product);
  };

  return (
    <div>
     <AiOutlineHeart onClick={handleAdd} /> 
    </div>
  );
}
