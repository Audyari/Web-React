// eslint-disable-next-line no-unused-vars
import React from 'react';

function GreetUsers(props) {
  // eslint-disable-next-line react/prop-types
  const greetings = props.names.map((name) => `Hello, ${name}!`);

  return (
    <div>
      <h1>Greetings:</h1>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}
      </ul>
    </div>
  );
}

export default GreetUsers;