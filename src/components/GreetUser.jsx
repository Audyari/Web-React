// eslint-disable-next-line no-unused-vars
import React from 'react';

function GreetUser(props) {
  // eslint-disable-next-line react/prop-types
  const greeting = `Hello, ${props.name}!`;

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Today is {new Date().toLocaleDateString()}.</p>
    </div>
  );
}

export default GreetUser;