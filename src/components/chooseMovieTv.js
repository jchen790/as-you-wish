import React from "react"
import MakeDecision from "./makeDecision"

const ChooseMovieTv = () => {
  // TODO - get options from a public API for movies and tv
  const options = [
      "Netflix",
      "Hulu",
      "Amazon Prime",
      "Disney+",
      "Anime"
  ]

  const makeDecisionProps = {
    defaultOptions: options,
      chooseButtonLabel: "Choose something to watch",
      addOptionLabel: "What movie or TV show would you like to add?"
  }

  return <MakeDecision {...makeDecisionProps} />;
}

export default ChooseMovieTv