/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function MyButton({ message }) {
  const handleClick = (event) => {
    console.log(`Tombol diklik dengan pesan: ${message}`);
  };

  return (
    <button onClick={(event) => handleClick(event, message)}>
      Klik saya
    </button>
  );
}

export default MyButton;