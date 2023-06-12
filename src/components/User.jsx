import React from 'react';

export default function User({user: {
    photoURL, displayName
}}) {
    return (
        <div className='flex items-center shrink-0 pt-5'>
            <span className='hidden md:block'>{displayName}</span>
        </div>
    );
}

