import React from "react";
import { LENGTH_OF_GUESS } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {

  const checkedGuess = checkGuess(guess, answer);
  
  return (
    <p className='guess'>
      {range(LENGTH_OF_GUESS).map((character) => (
        <span
          className={`cell ${checkedGuess?.[character].status}`}
          key={character}
        >
          {checkedGuess?.[character].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
