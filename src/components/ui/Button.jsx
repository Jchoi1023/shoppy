import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='pt-3 pl-2 hover:underline'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
