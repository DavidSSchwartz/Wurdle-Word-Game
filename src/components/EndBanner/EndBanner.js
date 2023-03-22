import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndBanner({ isWinner, numberOfGuesses, answer }) {
  return (
    <>
      {isWinner ? (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{' '}{numberOfGuesses} guesses</strong>.
          </p>
        </div>
      ) : numberOfGuesses === NUM_OF_GUESSES_ALLOWED ? (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EndBanner;
