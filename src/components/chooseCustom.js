import React from "react"
import MakeDecision from "./makeDecision"

const ChooseCustom = () => {
  const makeDecisionProps = {
      chooseButtonLabel: "Choose something",
      addOptionLabel: "What would you like to add?"
  }

  return <MakeDecision {...makeDecisionProps} />;
}

export default ChooseCustom