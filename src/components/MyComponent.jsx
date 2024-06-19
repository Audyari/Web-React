// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Anda telah mengklik tombol sebanyak {count} kali.</p>
      <button onClick={handleClick}>Klik saya</button>
    </div>
  );
}

export default MyComponent;