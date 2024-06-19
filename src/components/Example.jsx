// eslint-disable-next-line no-unused-vars
import React from 'react';

function Example() {
  const user = {
    name: 'Alice',
    age: 25,
    email: null,
  };

  return (
    <div>
      <h2>Informasi Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Usia: {user.age}</p>
      {user.email && <p>Email: {user.email}</p>}
    </div>
  );
}

export default Example;