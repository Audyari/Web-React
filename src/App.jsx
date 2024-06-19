/* eslint-disable no-unused-vars */
import React from 'react';

function App() {
  const isLoggedIn = true; // Anggap user sudah login

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Selamat datang, Pengguna!</h1>
          <p>Anda telah login.</p>
        </div>
      ) : (
        <div>
          <h1>Silakan login</h1>
          <p>Anda belum login.</p>
        </div>
      )}
    </div>
  );
}

export default App;