import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';
import CartStatus from './CartStatus';
import { AiOutlineHeart } from 'react-icons/ai';

const filters = ['Women', 'Men', 'Shoes', 'Accessories'];

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);
  // const [filter, setFilter] = useState('');

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <div className='md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <GoThreeBars className='text-4xl mt-3' />
        </button>
        {showMenu && (
          <ul className='flex flex-col text-sm pt-6 bg-salmon w-5 h-50'>
            {filters.map((value, index) => (
              <Link
                className='pt-5'
                key={index}
                to={`/products/${value}`}
                // onClick={() => setFilter(value)}
              >
                {value}
              </Link>
            ))}
            {/* <Link className='pt-5' to='/products/women'>
              Women
            </Link>
            <Link className='pt-5' to='/products/men'>
              Men
            </Link>
            <Link className='pt-5' to='/products/shoes'>
              Shoes
            </Link>
            <Link className='pt-5' to='/products/accessories'>
              Accessories
            </Link> */}
          </ul>
        )}
      </div>
      <Link to='/' className='text-4xl pt-2 hover:underline max-md:pr-12'>
        <h1>JIHYECHOI</h1>
      </Link>
      {filters.map((value, index) => (
        <Link
        className='pt-5 hover:underline max-md:hidden'
          key={index}    
          to={`/products/${value}`}
          // onClick={() => setFilter(value)}
        >
          {value}
        </Link>
      ))}
  

      {/* <Link className='pt-5 hover:underline max-md:hidden' to='/products/women'>
        Women
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/men'>
        Men
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/shoes'>
        Shoes
      </Link>
      <Link
        className='pt-5 hover:underline max-md:hidden'
        to='/products/accessories'
      >
        Accessories
      </Link> */}
      <div className='flex  text-sm justify-between'>
        <Link to='/favorite' className='flex hover:underline text-sm pt-5'>
          <AiOutlineHeart className='mt-1' />
          Favorites
        </Link>
        {user && (
          <Link to='/cart' className='hover:underline text-sm pt-5'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='hover:underline text-sm pt-5'>
            <BsFillPencilFill className='mt-1' />
          </Link>
        )}
        {!user && <Button text={'Sign in'} onClick={login} />}
        {user && <Button text={'Sign out'} onClick={logout} />}
      </div>
    </header>
  );
}
