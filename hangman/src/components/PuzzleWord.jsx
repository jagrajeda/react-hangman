function PuzzleWord({ puzzle, guessedLetters }) {
  const displayWord = puzzle
    .split("")
    .map((letter) =>
      guessedLetters.includes(letter.toLowerCase()) ? letter : "_"
    )
    .join(" ");

  return <h2 style={{ letterSpacing: "0.2rem" }}>{displayWord}</h2>;
}

export default PuzzleWord;