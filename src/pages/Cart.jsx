import React from 'react';
import CartItems from '../components/CartItems';
import PriceCard from '../components/PriceCard';
import useCart from '../hooks/useCart';
import ItemCount from '../components/ItemCount';

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
    <section className='p-8'>
      <div className='flex flex-col items-center text-2xl ali font-bold pb-4 border-b border-gray-300'>
       <p>In your bag</p>
       <ItemCount/>
      </div>  
      {!hasProducts && <p>No items.</p>}
      {hasProducts && (
        <div className='lg:mx-40 xl:flex justify-between '>
          <ul className='border-b border-gray-300 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItems key={product.id} product={product}/>
              ))}
          </ul>
          <div className='flex flex-col w-80 max-lg:m-auto'>
            <p className='font-bold text-center py-5'>Order Summary</p>
            <PriceCard className='underline' text='Price' price={totalPrice} />
            <PriceCard text='Shipping' price={SHIPPING} />
           <hr/>
            <PriceCard text='Order total' price={totalPrice + SHIPPING} />
           <button className='bg-zinc-700 text-white h-10 mt-5'>Proceed Checkout</button>
          </div>    
        </div>
      )}
    </section>
  );
}
