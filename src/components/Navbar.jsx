import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <div className='md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <GoThreeBars className='text-4xl mt-3' />
        </button>
        {showMenu && (
          <div className='flex flex-col text-sm pt-6 bg-salmon w-5 h-50'>
            <Link className='pt-5' to='/products/women'>
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
            </Link>
          </div>
        )}
      </div>

      <Link to='/' className='text-4xl pt-2 hover:underline max-md:pr-12'>
        <h1>JIHYECHOI</h1>
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/women'>
        Women
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/men'>
        Men
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/shoes'>
        Shoes
      </Link>
      <Link className='pt-5 hover:underline max-md:hidden' to='/products/accessories'>
        Accessories
      </Link>
      <div className='flex  text-sm justify-between'>
        {user && (
          <Link to='/cart' className='hover:underline text-sm pt-5'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='hover:underline text-sm pt-5'>
            <BsFillPencilFill className='mt-2' />
          </Link>
        )}
        {/* {user && <User user={user} />} */}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </div>
    </header>
  );
}
