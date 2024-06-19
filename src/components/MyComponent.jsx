// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Efek yang terpicu saat komponen dimuat
  useEffect(() => {
    console.log('Komponen dimuat');
  }, []);

  // Efek yang terpicu saat nilai count berubah
  useEffect(() => {
    console.log(`Count saat ini: ${count}`);
  }, [count]);

  // Efek yang terpicu saat data berubah
  useEffect(() => {
    console.log(`Data saat ini: ${data}`);
  }, [data]);

  // Efek yang terpicu saat isLoading berubah
  useEffect(() => {
    if (isLoading) {
      console.log('Sedang memuat data...');
    } else {
      console.log('Selesai memuat data.');
    }
  }, [isLoading]);

  const handleClick = () => {
    setCount(count + 1);
    setData([...data, 'Baru']);
    setIsLoading(true);

    // Simulasi pengambilan data dari server
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Data: {data.join(', ')}</p>
      <p>{isLoading ? 'Sedang memuat data...' : 'Selesai memuat data.'}</p>
      <button onClick={handleClick}>Tambah Count dan Data</button>
    </div>
  );
}

export default MyComponent;