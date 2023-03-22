import React from "react";

function GuessInput({guessList, setGuessList}) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuessList([...guessList, guess])
    setGuess("");
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
        maxLength={5}
        pattern='.{5}'
        onChange={handleInputChange}
      />
    </form>
  );
}

export default GuessInput;
