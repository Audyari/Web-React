// eslint-disable-next-line no-unused-vars
import React from "react";
import { UserWelcome } from './components';


function App() {
  const isLoggedIn = true;
  const username = 'John Doe';
  return (
    <div>
      <UserWelcome isLoggedIn={isLoggedIn} username={username} />
    </div>
  );
}

export default App;
