// eslint-disable-next-line no-unused-vars
import React from 'react';
import Article from "./components/Article";
import MyComponent from "./components/MyComponent";
import GreetUser from "./components/GreetUser";
import GreetUsersArray from "./components/GreetUsersArray";
import Greeting from "./components/Greeting";

function App() {
  const articleData = {
    title: "React Fundamentals",
    content: "This article covers the basics of React, including components, props, and state."
  };

  const messages = ['react', 'Nextjs', 'Nodejs'];
  const messages1 = ['Vuejs', 'Nuxtjs', 'Deno'];

  return (
    <div>
      <Article {...articleData} />
      <MyComponent />
      <GreetUser name="Audyari W" />
      <GreetUsersArray names={["John", "Jane", "Bob"]} />
      <Greeting name="Audyari" messages={messages} />
      <Greeting name="Butocakil" messages={messages1} />
    </div>
  );
}

export default App;