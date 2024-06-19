// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Efek yang akan dijalankan saat komponen di-render
    document.title = `Anda mengklik ${count} kali`;
  }, [count]); // Dependency array, efek akan dijalankan saat count berubah

  return (
    <div>
      <p>Anda mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}

export default MyComponent;