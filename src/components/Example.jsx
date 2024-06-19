// eslint-disable-next-line no-unused-vars
import React from 'react';

function Example() {
  const count = 2;

  return (
    <div>
      <p>
        Anda telah mengklik {count} kali.{' '}
        {count > 0 ? (
          <button onClick={() => console.log('Tombol diklik')}>
            Klik saya lagi
          </button>
        ) : (
          <p>Tombol tidak akan ditampilkan jika jumlah klik 0.</p>
        )}
      </p>
    </div>
  );
}

export default Example;