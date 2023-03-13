import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('Added');
        setTimeout(() => setSuccess(null), 3000);
      }
    });
  };
  return (
    <section>
      {/* <p className='mx-12 mt-4 text-gray-700'>{category}</p> */}
      <section className='flex flex-col md:flex-row p-10 px-30'>
        {/* <img src={image} alt={title} /> */}
        <img className='w-2/5 px-10 basis-7/12' src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{title}</h2>
          <p className='text-2xl font-bold py-2 border-b border-gray-400'>
            ${price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center'>
            <label className='font-bold' htmlFor='select'>
              Size:
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-dashed outline-none'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
            {success && <p className='my-2'>✅{success}</p>}
            <Button text='Add' onClick={handleClick} />
          </div>
        </div>
      </section>
    </section>
  );
}
