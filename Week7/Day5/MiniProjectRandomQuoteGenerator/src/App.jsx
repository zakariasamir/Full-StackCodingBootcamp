import React, { useState } from "react";
import Quotes from "./Quotes";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * Quotes.length);
    } while (newIndex === currentIndex);

    const getRandomColor = () => {
      return `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
    };

    setCurrentIndex(newIndex);
    setColor(getRandomColor());
  };

  const currentQuote = currentIndex !== null ? Quotes[currentIndex] : null;

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.5s",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "90%",
          textAlign: "center",
          color: "#333",
        }}
      >
        {currentQuote && (
          <>
            <h1 style={{ color }}>{currentQuote.quote}</h1>
            <p style={{ fontStyle: "italic", marginTop: "1rem", left: "0" }}>
              — {currentQuote.author}
            </p>
            <button
              onClick={generateRandomQuote}
              style={{
                marginTop: "2rem",
                padding: "10px 20px",
                backgroundColor: color,
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              New Quote
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
