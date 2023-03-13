import React, { useEffect, useState } from 'react';

const array = [
  'Get our newsletter to hear about sales and new stuff',
  'FREE EXPRESS SHIPPING on app orders $150+',
  'FREE SHIPPING on all orders + FREE US RETURNS',
  'Our ongoing commitments',
];

export default function Notification() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
    return () => clearInterval(timerId);
  }, []);

  const notification = array[count % array.length];

  return (
    <div>
      <p className='text-center text-xs p-3 bg-stone-100 font-semibold'>
        {notification}
      </p>
    </div>
  );
}
