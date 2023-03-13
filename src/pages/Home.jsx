import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <Main />
      <div className='hidden'>
      <Products/>
      </div>
      <Footer/>
    
    </>
  );
}
