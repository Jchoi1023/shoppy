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
      <section className='flex flex-col md:flex-row md:w-3/5 md:m-auto p-10 px-30'>
        <img className='w-1/5 px-10 basis-7/12' src={image} alt={title} />      
        <div className='w-full basis-5/12 flex flex-col p-4'>
        <div className='flex py-2'>
        <h2 className='text-3xl font-bold '>{title}</h2>
          {success && <p className='pl-2 py-1'>✅{success}</p>}
        </div>       
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
            <Button text='Add' onClick={handleClick} />           
          </div>          
        </div>      
      </section>     
    </section>
  );
}
