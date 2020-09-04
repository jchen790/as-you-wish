import React from "react"
import MakeDecision from "./makeDecision"

const ChooseFood = () => {
  // TODO - get options from yelp API
  const options = [
      "Chinese/Taiwanese",
      "Japanese",
      "Korean",
      "Mexican",
      "Poke",
      "Thai",
      "American",
      "Pizza",
      "Sushi",
      "Ramen",
      "Burgers",
      "Brunch",
      "Persian",
      "Mediterranean"
  ]

  const makeDecisionProps = {
    defaultOptions: options,
      chooseButtonLabel: "Choose something to eat",
      addOptionLabel: "What restaurant or recipe would you like to add?"
  }

  return <MakeDecision {...makeDecisionProps} />;
}

export default ChooseFood