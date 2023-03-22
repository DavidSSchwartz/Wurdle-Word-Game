import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import EndBanner from "../EndBanner/EndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState();

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        setIsWinner={setIsWinner}
        isWinner={isWinner}
      />
      <EndBanner
        isWinner={isWinner}
        numberOfGuesses ={guessList.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
