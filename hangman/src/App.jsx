import { useState, useEffect } from "react";
import words from "./words.json";
import PuzzleWord from "./components/PuzzleWord";
import GuessForm from "./components/GuessForm";
import WrongGuesses from "./components/WrongGuesses";
import "./App.css";

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const res = await fetch("https://random-word-api.herokuapp.com/word");
        if (!res.ok) throw new Error("Failed to fetch word");
        const data = await res.json();
        setPuzzle(data[0]);
      } catch (err) {
        // Fallback to local words.json if the API is unreachable
        const fallback = words[Math.floor(Math.random() * words.length)];
        setPuzzle(fallback);
      }
    };

    fetchWord();
  }, []);

  const handleGuess = (letter) => {
    const updatedGuesses = [...guessedLetters, letter];
    setGuessedLetters(updatedGuesses);

    const wrongCount = updatedGuesses.filter(
      (l) => !puzzle.toLowerCase().includes(l)
    ).length;

    if (wrongCount > 6) {
      alert(`Game Over! The word was "${puzzle}".`);
    }
  };

  if (!puzzle) {
    return <h2>Loading word...</h2>;
  }

  return (
    <div className="App">
      <h1>Hangman</h1>
      <PuzzleWord puzzle={puzzle} guessedLetters={guessedLetters} />
      <GuessForm guessedLetters={guessedLetters} onGuess={handleGuess} />
      <WrongGuesses puzzle={puzzle} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;