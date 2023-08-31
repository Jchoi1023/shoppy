import React from 'react';
import useFavorite from '../hooks/useFavorite';
import FavoriteItems from '../components/FavoriteItems';

export default function Favorite() {
  const {
    favoriteQuery: { data: products },
  } = useFavorite();
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-64'>
      {products &&
        products.map((product) => (
          <FavoriteItems key={product.id} product={product} />
        ))}
    </ul>
  );
}
