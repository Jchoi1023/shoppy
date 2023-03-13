import React from 'react';
import bg from '../img/bg.jpg';
import women from '../img/women.jpg';
import man from '../img/man.jpg';
import shoe from '../img/shoe.jpg';
import accessories from '../img/accessories.jpg';
import spring from '../img/spring.jpg';
import wellness from '../img/wellness.jpg';
import selfcare from '../img/selfcare.jpg';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div>
      <section className='relative'>
        <div className='w-full h-full bg-cover'>
          <img src={bg} alt='background'></img>
          <div className='absolute w-full text-center top-32 text-gray-50 drop-shadow-2xl'>
            <h2 className='font-serif text-6xl'>Jihye-Inspired</h2>
            <Link to='/products/women'>
              <h2 className='text-2xl mt-4 hover:underline'>→ The Women's Collection</h2>
            </Link>
          </div>
        </div>
      </section>
      <div className='text-center m-10'>
        <h2 className='text-3xl'>Shop what you love - faster and easier.</h2>
        <h1 className='font-serif text-l underline underline-offset-1'>
          Sign in or Create an Account
        </h1>
      </div>
      <section className='relative'>
        <div className='w-full h-full bg-cover'>
          <img src={spring} alt='background'></img>
          <div className='absolute w-full left-20 inset-x-0 bottom-20 text-gray-50 drop-shadow-2xl'>
            <h2 className='font-serif text-6xl'>Bring on Color</h2>
            <Link to='/products'>
              <h2 className='pl-10 mt-4 text-4xl hover:underline'>→ Spring Trends</h2>
            </Link>
          </div>
        </div>
      </section>
      <section className='columns-4 mt-20 mb-10 text-center font-bold'>
        <div>
          <Link to='/products/women'>
            <img src={women} alt='background'></img>
            <p className='mt-5 hover:underline'>Women</p>
          </Link>
        </div>
        <div>
          <Link to='/products/men'>
            <img src={man} alt='background'></img>
            <p className='mt-5 hover:underline '>Men</p>
          </Link>
        </div>
        <div>
          <Link to='/products/shoes'>
            <img src={shoe} alt='background'></img>
            <p className='mt-5 hover:underline '>Shoes</p>
          </Link>
        </div>
        <div>
          <Link to='/products/accessories'>
            <img src={accessories} alt='background'></img>
            <p className='mt-5 hover:underline '>Accessories</p>
          </Link>
        </div>
      </section>
      <div className='columns-2'>
        <section className='relative'>
          <div>
            <img src={wellness} alt='background'></img>
            <div className='absolute w-full text-center top-10 font-bold text-zinc-500 drop-shadow-2xl'>
              <h2 className='font-serif text-3xl'>Exercises for Everyone</h2>
            </div>
          </div>
        </section>
        <section className='relative'>
          <div>
            <img src={selfcare} alt='background'></img>
            <div className='absolute w-full text-center top-10 text-zinc-500 font-bold drop-shadow-2xl'>
              <h2 className='font-serif text-3xl'>Self-Care's Hidden Gems</h2>
            </div>
          </div>
        </section>
      </div>
      <hr className='mt-20'></hr>
    </div>
  );
}
