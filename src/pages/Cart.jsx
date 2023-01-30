import React from 'react';
import CartItems from '../components/CartItems';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 10;
export default function Cart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();
  if (isLoading) return <p>Loading</p>;
  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        My Cart
      </p>
      {!hasProducts && <p>No items.</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItems key={product.id} product={product}/>
              ))}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:p-8 lg:px-16'>
            <PriceCard text='Price' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='Shipping' price={SHIPPING} />
            <FaEquals className='shrink-0' />
            <PriceCard text='Total' price={totalPrice + SHIPPING} />
          </div>
          <Button text='Order' />
        </>
      )}
    </section>
  );
}
