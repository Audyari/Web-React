import React from 'react';

function MyButton() {
  return (
    <button onClick={(event) => {
      console.log('Tombol diklik!');
    }}>
      Klik saya
    </button>
  );
}

export default MyButton;