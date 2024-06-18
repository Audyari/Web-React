import Article from "./components/Article";
import MyComponent from "./components/MyComponent";
import GreetUser from "./components/GreetUser";
import GreetUsersArray from "./components/GreetUsersArray";

function App() {
  return (
    <div>
      <Article title="Judul Artikel 1" content="Ini adalah konten artikel 1." />
      <MyComponent />
      <GreetUser name="Audyari W" />
      <GreetUsersArray names={['John', 'Jane', 'Bob']} />
    </div>
  );
}

export default App;
