import React from 'react';

export default function Footer() {
    return (
        <section className='columns-4 mt-8 mb-8 text-left text-zinc-500'>
            <div>
                <span className='font-bold text-sm'>Your Order</span>
                <p className='text-xs mt-2'>Track Your Order</p>
                <p className='text-xs mt-1'>Shipping + Delivery</p>
                <p className='text-xs mt-1'>Returns + Exchanges</p>
                <p className='text-xs mt-1'>Start A return (US)</p>
            </div>
            <div>
                <span className='font-bold text-sm'>Help + Info</span>
                <p className='text-xs mt-2'>Commitment</p>
                <p className='text-xs mt-1'>Contact Us</p>
                <p className='text-xs mt-1'>Request A Catalog</p>
                <p className='text-xs mt-1'>See All Help Topics</p>
            </div>
            <div>
                <span className='font-bold text-sm'>About</span>
                <p className='text-xs mt-2'>Our Story</p>
                <p className='text-xs mt-1'>Job Opportunities</p>
                <p className='text-xs mt-1'>Wholesale</p>
                <p className='text-xs mt-1'>Affiliates</p>
            </div>
            <div>
                <span className='font-bold text-sm'>Discover</span>
                <p className='text-xs mt-2'>Movement</p>
                <p className='text-xs mt-1'>Care</p>
                <p className='text-xs mt-1'>Blog</p>
                <p className='text-xs mt-1'>What's next</p>
            </div>
        </section>
    );
}

