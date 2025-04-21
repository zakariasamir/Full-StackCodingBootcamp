import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  }

  return (
    <div className="container">
      <h1>Vote for your favorite language</h1>
      <div className="languages">
        {languages.map((language, index) => (
          <div className="language" key={index}>
            <p>{language.votes}</p>
            <h2>{language.name}</h2>
            <button
              onClick={handleVote.bind(null, index)}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
