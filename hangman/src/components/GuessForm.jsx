import { useState } from "react";

function GuessForm({ guessedLetters, onGuess }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const letter = input.trim().toLowerCase();

    if (!letter || !/^[a-z]$/.test(letter)) {
      setInput("");
      return;
    }

    if (guessedLetters.includes(letter)) {
      alert(`You already guessed "${letter}"!`);
      setInput("");
      return;
    }

    onGuess(letter);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a letter"
      />
      <button type="submit">Guess</button>
    </form>
  );
}

export default GuessForm;