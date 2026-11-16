import { useState } from "react";
import words from "./words.json";
import PuzzleWord from "./components/PuzzleWord";
import GuessForm from "./components/GuessForm";
import WrongGuesses from "./components/WrongGuesses";
import "./App.css";

function App() {
  const [puzzle] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);

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