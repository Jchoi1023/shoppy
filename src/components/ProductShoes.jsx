import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function ProductShoes() {
  const {
    getProduct: { isLoading, error, data: products },
  } = useProducts();

  const filtered = products.filter((product) => product.category === 'Shoes');

  console.log(filtered);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-4 p-4 md:px-64 2xl:px-96 px-4'>
        {filtered &&
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
