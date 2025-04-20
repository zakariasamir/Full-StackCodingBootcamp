import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <p>Hello World!</p>
      {myElement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </div>
  );
}

export default App;
