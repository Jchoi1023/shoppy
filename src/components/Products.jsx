import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {
    getProduct: { isLoading, error, data: products },
  } = useProducts();
 console.log(products);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-4 p-4 md:px-64 2xl:px-96 px-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
      {/* <button>Load More</button> */}
    </div>
  );
}
