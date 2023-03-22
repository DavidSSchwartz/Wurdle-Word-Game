import React from "react";
import { LENGTH_OF_GUESS, NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({guessList, setGuessList, answer, setIsWinner, isWinner}) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuessList([...guessList, guess]);
    setGuess("");
    if (guess === answer)
      setIsWinner(true);
  };

  const handleInputChange = (e) => {
    const upperCaseValue = e.target.value.toUpperCase();
    setGuess(upperCaseValue);
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        type='text'
        id='guess-input'
        value={guess}
        maxLength={LENGTH_OF_GUESS}
        pattern='.{5}'
        onChange={handleInputChange}
        disabled={isWinner || guessList.length === NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default GuessInput;
