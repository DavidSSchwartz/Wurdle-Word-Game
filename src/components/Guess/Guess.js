import React from "react";
import { LENGTH_OF_GUESS } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(LENGTH_OF_GUESS).map((character) => (
        <span className='cell' key={character}>
          {guess?.[character]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
