function WrongGuesses({ puzzle, guessedLetters }) {
  const wrongLetters = guessedLetters.filter(
    (letter) => !puzzle.toLowerCase().includes(letter)
  );

  return (
    <div>
      <h3>Wrong Guesses ({wrongLetters.length} / 6):</h3>
      <p>{wrongLetters.join(", ")}</p>
    </div>
  );
}

export default WrongGuesses;