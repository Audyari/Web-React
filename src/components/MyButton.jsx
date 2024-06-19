// eslint-disable-next-line no-unused-vars
import React from 'react';

function MyButton() {
    const handleClick = () => {
      console.log('Tombol diklik!');
    };
  
    return (
      <button onClick={handleClick}>Klik saya</button>
    );
  }

  export default MyButton;