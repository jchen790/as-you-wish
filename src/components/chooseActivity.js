import React from "react"
import MakeDecision from "./makeDecision"

const ChooseActivity = () => {
  const options = [
      "Read a book",
      "Watch a movie",
      "Start a new TV show",
      "Finish a TV show",
      "Try a new recipe",
      "Draw",
      "Origami",
      "Papercraft",
      "Shop for clothes",
      "Go for a walk",
      "Do a workout",
      "Play a video game",
      "Dance",
      "Play piano"
  ]

  const makeDecisionProps = {
    defaultOptions: options,
      chooseButtonLabel: "Choose something to do",
      addOptionLabel: "What activity would you like to add?"
  }

  return <MakeDecision {...makeDecisionProps} />;
}

export default ChooseActivity