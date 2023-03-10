import React from 'react';

export default function User({user: {
    photoURL, displayName
}}) {
    return (
        <div className='flex items-center shrink-0 pt-5'>
            {/* <img className='w-10 h-10 roundefull mr-2' scr={photoURL} alt={displayName}/> */}
            <span className='hidden md:block'>{displayName}</span>
        </div>
    );
}

